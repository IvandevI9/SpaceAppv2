import styled from "styled-components";
import ItemNavegacion from "./ItemNavegacion";
import { useState } from "react";

// Estilo para la lista no ordenada (ul) que contiene los elementos de navegación
const ListaEstilizada = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 236px; /* Ancho fijo para la barra lateral */
  display: flex;
  flex-direction: column;



  @media (max-width: 599px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  /* Media query para tabletas */
  @media (min-width: 600px) and (max-width: 1199px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;



const BarraLateral = () => {
    const [activo, setActivo] = useState(null);

    const handleClick = (itemId) => {
        setActivo(itemId); // Actualiza el estado con el ID del item clickeado
    };

    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacion
                        iconoActivo="/iconos/home-activo.png"
                        iconoInactivo="/iconos/home-inactivo.png"
                        activo={activo === 'inicio'}
                        onClick={() => handleClick('inicio')}
                        style={{ cursor: 'pointer' }}
                    >
                        <p>Inicio</p>
                    </ItemNavegacion>
                    <ItemNavegacion
                        iconoActivo="/iconos/mas-vistas-activo.png"
                        iconoInactivo="/iconos/mas-vistas-inactivo.png"
                        activo={activo === 'masVistas'}
                        onClick={() => handleClick('masVistas')}
                        style={{ cursor: 'pointer' }}
                    >
                        <p>Más vistas</p>
                    </ItemNavegacion>
                    <ItemNavegacion
                        iconoActivo="/iconos/me-gusta-activo.png"
                        iconoInactivo="/iconos/me-gusta-inactivo.png"
                        activo={activo === 'meGusta'}
                        onClick={() => handleClick('meGusta')}
                        style={{ cursor: 'pointer' }}
                    >
                        <p>Más Me Gusta</p>
                    </ItemNavegacion>
                    <ItemNavegacion
                        iconoActivo="/iconos/nuevas-activo.png"
                        iconoInactivo="/iconos/nuevas-inactivo.png"
                        activo={activo === 'nuevas'}
                        onClick={() => handleClick('nuevas')}
                        style={{ cursor: 'pointer' }}
                    >
                        <p>Nuevas</p>
                    </ItemNavegacion>
                    <ItemNavegacion
                        iconoActivo="/iconos/sorprendeme-activo.png"
                        iconoInactivo="/iconos/sorprendeme-inactivo.png"
                        activo={activo === 'sorprendeme'}
                        onClick={() => handleClick('sorprendeme')}
                        style={{ cursor: 'pointer' }}
                    >
                        <p>Sorpréndeme</p>
                    </ItemNavegacion>
                </ListaEstilizada>
            </nav>
        </aside>
    );
};

export default BarraLateral;