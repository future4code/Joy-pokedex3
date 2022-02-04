import { IdProvider } from "@chakra-ui/hooks"

export const goToHome = (navigate) => {
    navigate("/")
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goToDetalhes = (navigate, name) => {
    navigate(`/detalhes/${name}`)
} 