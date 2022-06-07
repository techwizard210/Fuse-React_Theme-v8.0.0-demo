import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function DirectoryStructureDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Directory Structure
      </Typography>

      <Box className="mb-24 px-24 py-16 border-1 rounded-16" sx={{ borderColor: 'secondary.main' }}>
        <Typography className="" component="div">
          Fuse React's directory structure might look overwhelming and intimidating at first, but
          following this page and giving a bit time to understand it before jumping right into code
          will help immensely.
        </Typography>
      </Box>

      <Typography className="mb-16">
        Fuse React built around the idea of multi-purpose and multi-layout. You can think of Fuse as
        a Starter kit and a guide rather than just a simple template. The purpose of Fuse React is
        not only provide a pre-made styles for visual elements but is also be a guide to follow
        while building an app.
      </Typography>

      <Typography className="mb-16">
        It's more of an answer to the questions like Where should I put this file? or Which file
        should I put this piece of code into? rather than just a compilation of example pages and
        ready to use styles.
      </Typography>

      <Typography className="mb-16">Here is the directory structure of the Fuse React:</Typography>

      <div className="overflow-auto w-full h-800">
        <img
          className="max-w-none"
          src="assets/images/etc/directory-structure.png"
          alt="fuse react directory structure"
        />
      </div>
    </>
  );
}

export default DirectoryStructureDoc;
