// import { render,screen,fireEvent } from "@testing-library/react"
// import { MultipleCustomHooks } from "../../example/MultipleCustomHooks";

// import { useFetch } from "../../hooks/useFetch";
// import useCounter from "../../hooks/useCounter"; 

// jest.mock("../../../../src/hooks/useFetch");
// jest.mock("./../useCounter");

// describe("Pruebas en MultipleCustomHooks", () => {
//     const mockIncrement = jest.fn();

//     useCounter.mockReturnValue({
//       counter: 1,
//       increment: mockIncrement,
//     });
   
//     beforeEach(() => {
//       jest.clearAllMocks();
//     });
   
//     test("debe mostrar el componente por defecto ", () => {
//       useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });
//       render(<MultipleCustomHooks />);
//       //screen.debug();
   
//       const siguienteButton : HTMLButtonElement= screen.getByRole("button", { name: "next" });
   
//       expect(screen.getByText("Cargando..."));
//       expect(screen.getByText("Información de Pokemons"));
//       expect(siguienteButton.disabled).toBeTruthy();
//     });
   
//     test("debe de mostrar el componente un pokemon", () => {
//       useFetch.mockReturnValue({
//         data: {
//           name: "Charmander",
//           id: 2,
//           sprites: {
//             back_default: "back_default",
//             back_shiny: "back_shiny",
//             front_default: "front_default",
//             front_shiny: "front_shiny",
//           },
//         },
//         isLoading: false,
//         hasError: null,
//       });
//       render(<MultipleCustomHooks />);
//       // screen.debug();
//       expect(screen.getByText(`#2 - Charmander`)).toBeTruthy();
//     });
   
//     test("Debe de llamar la función de incrementar", () => {
//       useFetch.mockReturnValue({
//         data: {
//           name: "Charmander",
//           id: 2,
//           sprites: {
//             back_default: "back_default",
//             back_shiny: "back_shiny",
//             front_default: "front_default",
//             front_shiny: "front_shiny",
//           },
//         },
//         isLoading: false,
//         hasError: null,
//       });
   
//       render(<MultipleCustomHooks />);
   
//       const siguienteButton:HTMLButtonElement = screen.getByRole("button", { name: "next" });
//       fireEvent.click(siguienteButton);
   
//       expect(mockIncrement).toHaveBeenCalled();
//     });
//   });