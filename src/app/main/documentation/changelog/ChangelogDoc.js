import Typography from '@mui/material/Typography';
import { lighten } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ChangelogCard from './ChangelogCard';
import changelogData from './ChangelogData';

function ChangelogDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Changelog
      </Typography>

      <Box
        className="w-full rounded-16 border p-12 flex flex-col items-center"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.02),
        }}
      >
        {changelogData.map((item) => (
          <ChangelogCard className="shrink-0 mb-24 w-full" key={item.version} {...item} />
        ))}
      </Box>
    </>
  );
}

export const fuseReactLatestVersion = changelogData[0].version;

export default ChangelogDoc;
