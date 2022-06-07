import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
}));

function TailwindCssUI() {
  return (
    <Root
      header={
        <div className="flex flex-col sm:flex-row flex-0 sm:items-center sm:justify-between p-24 sm:py-32 sm:px-40">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center font-medium">
              <div>
                <Typography className="whitespace-nowrap" color="secondary.main">
                  User Interface
                </Typography>
              </div>
            </div>
            <div className="mt-8">
              <Typography className="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
                TailwindCSS
              </Typography>
            </div>
          </div>
        </div>
      }
      content={
        <div className="flex-auto p-24 sm:p-40">
          <div>
            <Typography className="mb-16">
              As per the official page of Tailwind CSS, it is a highly customizable, low-level CSS
              framework that gives you all of the building blocks you need to build bespoke designs
              without any annoying opinionated styles you have to fight to override.
            </Typography>

            <Typography className="mb-16">
              To simply put, Tailwind provides helper classes for almost every CSS rule available.
              Fuse includes and uses Tailwind by default and it can be used in any part of the
              theme.
            </Typography>

            <Typography className="text-20 font-700 mt-32 mb-16">Styling in Material-UI</Typography>

            <Typography className="mb-16" component="p">
              Fuse React developed based on Material-UI as ui library.
              <a
                className="mx-4"
                href="https://mui.com/system/basics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Material-UI's styling solution
              </a>
              uses emotion at its core. Therefore the Fuse React supports
              <a
                className="mx-4"
                href="http://cssinjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Emotion
              </a>{' '}
              (Emotion is a library designed for writing css styles with JavaScript)
            </Typography>
          </div>

          <div>
            <Typography className="text-20 font-700 mt-32 mb-16" variant="h5">
              Helper Classes with TailwindCSS
            </Typography>

            <Typography className="mb-16" component="p">
              We are accepting JSS advantages but we can't leave <b>helper classes</b> for fast
              development, ease of use, globally access etc. So we have used both in components.
            </Typography>

            <Typography className="mb-16" component="p">
              We are using
              <a
                className="mx-4"
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TailwindCSS
              </a>
              as an engine for generating helper classes. It's not an UI kit and it's customizable.
              You can find the config file of Tailwind with named "<b>tailwind.js</b>" under the
              root of Fuse React.
            </Typography>
          </div>

          <Typography className="text-20 font-700 mt-32 mb-16">Official docs</Typography>

          <Typography className="my-16">
            Official Tailwind CSS documentation:
            <Typography
              component="a"
              className="link mx-4"
              href="https://tailwindcss.com/"
              rel="noreferrer"
              target="_blank"
            >
              https://tailwindcss.com/
            </Typography>
          </Typography>
        </div>
      }
    />
  );
}

export default TailwindCssUI;
