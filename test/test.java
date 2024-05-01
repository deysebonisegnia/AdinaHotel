package br.com.pihoteisepousadas.test;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class test {
    @Test
    void dadaListaVazia_quandoChamamosEndpointBuscarHotel_entaoRetornarPaginaVaziaa() throws Exception {
        Mockito.when(HospedagemService.buscarHospedagem(Mockito.any()))
                .thenReturn(new PageImpl<>(List.of()));

        MockHttpServletRequestBuilder request = MockMvcRequestBuilders
                .get("/v1/hotel")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);

        this.mvc.perform(request)
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content", hasSize(0)))
                .andExpect(jsonPath("$.totalElements", equalTo(0)))
                .andExpect(jsonPath("$", hasKey("size")));
    }

    @Test
    void dadoUmObjetoValido_quandoChamamosCriarHotel_entaoRetornarObjetoMockado() throws Exception {
        CreateHotelRequest Hotel = Fixture.HotelFake.anyHotel();

        String hotelAsJson = mapper.writeValueAsString(Hotel);

        MockHttpServletRequestBuilder request = MockMvcRequestBuilders
                .post("/v1/Hotel")
                .content(hotelAsJson)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);

        this.mvc.perform(request)
                .andDo(print())
                .andExpect(status().isCreated());
    }
}




