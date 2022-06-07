import Card from '@mui/material/Card';
import { alpha, styled } from '@mui/material/styles';
import { blue, green, red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';

const StyledBadge = styled('div')(({ theme, value }) => ({
  display: 'inline-flex',
  fontSize: 14,
  fontWeight: 700,
  color: '#FFF',
  // letterSpacing: '.015em',
  lineHeight: 1,
  padding: '4px 12px',
  borderRadius: 4,

  ...(value === 'new' && {
    backgroundColor: green[50],
    color: alpha(green[500], 0.8),
  }),
  ...(value === 'fix' && {
    backgroundColor: blue[50],
    color: alpha(blue[500], 0.8),
  }),
  ...(value === 'breaking' && {
    backgroundColor: red[50],
    color: alpha(red[500], 0.8),
  }),
}));

function ChangelogCard(props) {
  return (
    <Card className={clsx('py-24 px-32 shadow', props.className)}>
      <div className="flex items-center">
        {props.version && (
          <Typography className="text-24 font-700" component="h2">{`v${props.version}`}</Typography>
        )}
        {props.date && (
          <Typography className="text-17 mx-8 font-600" color="text.secondary" component="h3">
            ({props.date})
          </Typography>
        )}
      </div>
      {props.newChanges.length > 0 && (
        <div className="mt-40">
          <StyledBadge value="new">New</StyledBadge>
          <ul className="my-16 px-24 list-disc">
            {props.newChanges.map((change, index) => (
              <li key={index} className="mb-6">
                <Typography>{change}</Typography>
              </li>
            ))}
          </ul>
        </div>
      )}
      {props.fixedChanges.length > 0 && (
        <div className="mt-40">
          <StyledBadge value="fix">Fixed</StyledBadge>
          <ul className="my-16 px-24 list-disc">
            {props.fixedChanges.map((change, index) => (
              <li key={index} className="mb-6">
                <Typography>{change}</Typography>
              </li>
            ))}
          </ul>
        </div>
      )}
      {props.breakingChanges.length > 0 && (
        <div className="mt-40">
          <StyledBadge value="breaking">Breaking Changes</StyledBadge>
          <ul className="my-16 px-24 list-disc">
            {props.breakingChanges.map((change, index) => (
              <li key={index} className="mb-6">
                <Typography>{change}</Typography>
              </li>
            ))}
          </ul>
        </div>
      )}

      {props.notes}
    </Card>
  );
}

ChangelogCard.defaultProps = {
  version: null,
  date: null,
  newChanges: [],
  fixedChanges: [],
  breakingChanges: [],
  notes: null,
};
export default ChangelogCard;
