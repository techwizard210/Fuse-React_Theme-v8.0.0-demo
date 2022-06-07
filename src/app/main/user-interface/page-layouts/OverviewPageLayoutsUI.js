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

function OverviewPageLayoutsUI() {
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
                Overview
              </Typography>
            </div>
          </div>
          <div />
        </div>
      }
      content={
        <div className="flex-auto p-24 sm:p-40">
          <div className="prose prose-sm dark:prose-invert">
            <Typography className="text-20 font-700 mb-16">Introduction</Typography>
            <Typography>
              Page layouts are set of pre-made layouts that can be used as the starter on any
              page/app design. While they provide some styling by default, it's very minimal and can
              be easily modified from the component you create.
            </Typography>
            <Typography>Main benefits of using page layouts are;</Typography>
            <Typography component="ul">
              <li>
                <p>
                  <strong>Consistency</strong>
                </p>
                Your apps and pages will all look similar in terms of layout and general styling
                which essentially make them more user friendly and easy to learn.
              </li>
              <li>
                <p>
                  <strong>Easy modifications</strong>
                </p>
                In the future, if you decide to change the design of your pages, add elements or
                modify the existing ones, it can be done very easily since all your pages will be
                sharing same class names and the general code structure.
              </li>
              <li>
                <p>
                  <strong>Easier learning curve for your users</strong>
                </p>
                Making the general design and layout of your pages similar will make them easier to
                learn for your users. They won't be looking for a save button or a search field over
                and over again, trying to find and memorize their locations for each page since all
                pages will be sharing a similar structure.
              </li>
            </Typography>
          </div>
        </div>
      }
    />
  );
}

export default OverviewPageLayoutsUI;
