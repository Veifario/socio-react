import RoutesComp from "routes/RoutesComp";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const mode = useSelector((state) => state.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<RoutesComp />
			</ThemeProvider>
			<ToastContainer />
		</div>
	);
}

export default App;
