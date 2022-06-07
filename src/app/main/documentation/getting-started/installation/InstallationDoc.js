import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function InstallationDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Installation
      </Typography>

      <Typography className="text-20 mb-10 font-700" variant="h5">
        Prerequisites
      </Typography>

      <Typography className="mb-16" component="p">
        This section will give you some information about what tools you will need.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Node.js
      </Typography>

      <Typography className="mb-16" component="p">
        To install and use Fuse React, you will need{' '}
        <a href="https://nodejs.org/" target="_blank" rel="noreferrer noopener">
          Node.js
        </a>{' '}
        installed on your computer. We won't get into too much detail about Node.js as it's out of
        the scope of this documentation. Also, you won't need to use Node.js, it's only required for
        the development process.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Installation
      </Typography>

      <Typography className="text-16 mt-24 mb-10 font-700" variant="h6">
        A. Installing Prerequisites
      </Typography>

      <Typography className="" component="div">
        Download and install <b>at least LTS</b> or the latest version of{' '}
        <a href="https://nodejs.org/" target="_blank" rel="noreferrer noopener">
          Node.js
        </a>{' '}
        from its web site.
      </Typography>

      <Typography className="text-16 mt-24 mb-10 font-700" variant="h6">
        B. Installing Fuse React
      </Typography>

      <Typography className="" component="div">
        Before you begin installing Fuse, prepare a folder where you can unzip the downloaded .zip
        file.
      </Typography>

      <div className="mx-16 my-32">
        <Typography className="flex text-15 mb-10 font-700" variant="h7">
          B.1. Choose which version you want to install
        </Typography>

        <Typography className="" component="div">
          When you unzip the .zip file you have downloaded from Themeforest, you will find 2
          additional .zip files along with other files. One of those .zip files is the Demo version,
          and the other one is the Skeleton version:
        </Typography>

        <ul className="list-disc mx-16">
          <li>
            <Typography className="mt-12" component="div">
              Demo <b>Fuse-react-x.x.x-demo.zip</b>
            </Typography>
            <Typography className="mt-12" component="div">
              This .zip file includes the Demo version which includes all the applications, pages
              and UI sections from the Demo application. This version is for referencing purposes
              only and it should be only used for copying code/modules from it.
            </Typography>
            <Typography className="mt-12" component="div">
              <b>DO NOT</b> use the Demo version to build your app, otherwise you will have a lot of
              unnecessary weight to your app right from the start and it will provide a poor
              development experience.
            </Typography>
          </li>

          <li>
            <Typography className="mt-12" component="div">
              Skeleton <b>Fuse-react-x.x.x-skeleton.zip</b>
            </Typography>
            <Typography className="mt-12" component="div">
              This .zip file includes the Skeleton version which includes all the core components
              and functionality of Fuse without the Demo applications, pages and UI sections.{' '}
              <b>DO</b> use the Skeleton version to build your app on top.
            </Typography>
          </li>
        </ul>

        <Typography className="flex text-15 mt-32 mb-10 font-700" variant="h7">
          B.2. Unzip
        </Typography>

        <Typography className="" component="div">
          After choosing the version you want to install, unzip the .zip file of that version into
          your workspace directory.
        </Typography>
      </div>

      <Typography className="text-16 mt-24 mb-10 font-700" variant="h6">
        C. Run the installation command
      </Typography>

      <Typography className="mb-16" component="div">
        Open a console/terminal window and navigate into your workspace directory. You must be at
        the same folder with the package.json file in order to run the commands.
      </Typography>

      <Typography className="mb-16" component="div">
        To complete the installation, enter the following command:
      </Typography>

      <FuseHighlight component="pre" className="language-bash mb-16">
        {` npm install `}
      </FuseHighlight>

      <Typography className="mb-16" component="div">
        This command will take some time and install all the required libraries into the
        node_modules directory in order for you to start developing.
      </Typography>

      <Box className="mb-24 px-24 py-16 border-1 rounded-16" sx={{ borderColor: 'secondary.main' }}>
        <Typography className="" component="div">
          After the installation completes, you may see warnings about deprecated packages and
          security risks. You can safely ignore those messages as Fuse (and other React apps) use
          Node.js for only development environment. <br /> <br /> Unless you explicitly add a
          package to your dependencies list in package.json file, they won't be included into the
          final application therefore they are not going cause any security risks.
        </Typography>
      </Box>
    </>
  );
}

export default InstallationDoc;
