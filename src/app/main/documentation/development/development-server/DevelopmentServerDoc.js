import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function DevelopmentServerDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Development Server
      </Typography>

      <Typography className="mb-16" component="p">
        While still in your work folder, run the following command in the console application:
      </Typography>

      <FuseHighlight component="pre" className="language-bash my-16">
        {` npm start `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        And that's it. create-react-app will take care of everything and start the Fuse React.
      </Typography>

      <Typography className="mb-16" component="p">
        You can check out your console application to get further information about the server. By
        default, it will run on <b>http://localhost:3000</b> but it might change depending on your
        setup.
      </Typography>

      <div className="my-24 px-24 py-16 border-1 border-red rounded-16">
        <Typography className="mb-8 font-500 text-16 text-red">Important:</Typography>
        <Typography className="" component="div">
          If you have runtime errors on first run, make sure you are using at least LTS release of
          Node.js. Remove node_modules and try again.
        </Typography>
      </div>
    </>
  );
}

export default DevelopmentServerDoc;
