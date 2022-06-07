import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme, color }) => ({
  display: 'flex',
  alignItems: 'center',
  height: 20,
  borderRadius: 10,
  padding: '0 6px',
  fontSize: 10,
  backgroundColor: 'rgba(0,0,0,.08);',
  '& > span': {
    width: 8,
    height: 8,
    marginRight: 4,
    borderRadius: '50%',
    backgroundColor: color,
  },
}));

function MailChip(props) {
  return (
    <Root className={props.className} color={props.color}>
      <span />
      <div>{props.title}</div>
    </Root>
  );
}

export default MailChip;
