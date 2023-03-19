
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading(){
        return (
                <Box>
                  <CircularLoading />
                  
                </Box>
              );
}

const CircularLoading = () => (
        <>
          <CircularProgress
            size={70}
            sx={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2
            }}
          />
        </>
      );
