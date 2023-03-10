import { Box, Grid } from "@mui/material";

type MainLayoutProps = {
  Header?: JSX.Element;
  Navigation?: JSX.Element;
  Main?: JSX.Element;
  Side?: JSX.Element;
};

export const MainLayout = ({
  Header,
  Navigation,
  Main,
  Side,
  ...rest
}: MainLayoutProps) => (
  <Box sx={{ flexGrow: 1 }}>
    {Header}
    <Grid container sx={{ height: "90vh" }} spacing={2} justifyContent='center'>
      <Grid item sx={{ height: "100%" }} xs={12} md={11} lg={11}>
        {Navigation}
        {Main}
      </Grid>
    </Grid>
  </Box>
);
export default MainLayout;
