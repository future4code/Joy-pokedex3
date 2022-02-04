import { IdProvider } from "@chakra-ui/hooks"

export const goToHome = (navigate) => {
    navigate("/")
}

export const goToPokedex = (navigate) => {
    navigate("/Pokedex")
}

export const goToDetalhes = (navigate, name) => {
    navigate(`/Detalhes/${name}`)
} 