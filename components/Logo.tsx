import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Logo() {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                height: 100,
                textAlign: "center",
                justifyContent: "center",
                color: "rgb(46, 1, 1)",
                background: "lightblue"
            }} 
        >
            <Typography>
                <h3>FFM WEB</h3>
                <h5>Soon To Be Inhalt...</h5>
            </Typography>
        </Box>
    )
}