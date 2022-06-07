import { lazy } from 'react';

const Accordion = lazy(() => import('./pages/Accordion'));
const Alert = lazy(() => import('./pages/Alert'));
const AppBar = lazy(() => import('./pages/AppBar'));
const Autocomplete = lazy(() => import('./pages/Autocomplete'));
const Avatars = lazy(() => import('./pages/Avatars'));
const Backdrop = lazy(() => import('./pages/Backdrop'));
const Badges = lazy(() => import('./pages/Badges'));
const BottomNavigation = lazy(() => import('./pages/BottomNavigation'));
const Box = lazy(() => import('./pages/Box'));
const Breadcrumbs = lazy(() => import('./pages/Breadcrumbs'));
const ButtonGroup = lazy(() => import('./pages/ButtonGroup'));
const Buttons = lazy(() => import('./pages/Buttons'));
const Cards = lazy(() => import('./pages/Cards'));
const Checkboxes = lazy(() => import('./pages/Checkboxes'));
const Chips = lazy(() => import('./pages/Chips'));
const ClickAwayListener = lazy(() => import('./pages/ClickAwayListener'));
const Container = lazy(() => import('./pages/Container'));
const CssBaseline = lazy(() => import('./pages/CssBaseline'));
const Dialogs = lazy(() => import('./pages/Dialogs'));
const Dividers = lazy(() => import('./pages/Dividers'));
const Drawers = lazy(() => import('./pages/Drawers'));
const FloatingActionButton = lazy(() => import('./pages/FloatingActionButton'));
const Grid = lazy(() => import('./pages/Grid'));
const ImageList = lazy(() => import('./pages/ImageList'));
const Links = lazy(() => import('./pages/Links'));
const Lists = lazy(() => import('./pages/Lists'));
const Masonry = lazy(() => import('./pages/Masonry'));
const Menus = lazy(() => import('./pages/Menus'));
const Modal = lazy(() => import('./pages/Modal'));
const NoSsr = lazy(() => import('./pages/NoSsr'));
const Pagination = lazy(() => import('./pages/Pagination'));
const Paper = lazy(() => import('./pages/Paper'));
const Popover = lazy(() => import('./pages/Popover'));
const Popper = lazy(() => import('./pages/Popper'));
const Portal = lazy(() => import('./pages/Portal'));
const Progress = lazy(() => import('./pages/Progress'));
const RadioButtons = lazy(() => import('./pages/RadioButtons'));
const Rating = lazy(() => import('./pages/Rating'));
const Selects = lazy(() => import('./pages/Selects'));
const Skeleton = lazy(() => import('./pages/Skeleton'));
const Slider = lazy(() => import('./pages/Slider'));
const Snackbars = lazy(() => import('./pages/Snackbars'));
const SpeedDial = lazy(() => import('./pages/SpeedDial'));
const Stack = lazy(() => import('./pages/Stack'));
const Steppers = lazy(() => import('./pages/Steppers'));
const Switches = lazy(() => import('./pages/Switches'));
const Tables = lazy(() => import('./pages/Tables'));
const Tabs = lazy(() => import('./pages/Tabs'));
const TextFields = lazy(() => import('./pages/TextFields'));
const TextareaAutosize = lazy(() => import('./pages/TextareaAutosize'));
const Timeline = lazy(() => import('./pages/Timeline'));
const ToggleButton = lazy(() => import('./pages/ToggleButton'));
const Tooltips = lazy(() => import('./pages/Tooltips'));
const TransferList = lazy(() => import('./pages/TransferList'));
const Transitions = lazy(() => import('./pages/Transitions'));
const TreeView = lazy(() => import('./pages/TreeView'));
const Typography = lazy(() => import('./pages/Typography'));

const MaterialUIComponentsRoutes = [
  {
    path: 'material-ui-components/accordion',
    element: <Accordion />,
  },
  {
    path: 'material-ui-components/alert',
    element: <Alert />,
  },
  {
    path: 'material-ui-components/app-bar',
    element: <AppBar />,
  },
  {
    path: 'material-ui-components/autocomplete',
    element: <Autocomplete />,
  },
  {
    path: 'material-ui-components/avatars',
    element: <Avatars />,
  },
  {
    path: 'material-ui-components/backdrop',
    element: <Backdrop />,
  },
  {
    path: 'material-ui-components/badges',
    element: <Badges />,
  },
  {
    path: 'material-ui-components/bottom-navigation',
    element: <BottomNavigation />,
  },
  {
    path: 'material-ui-components/box',
    element: <Box />,
  },
  {
    path: 'material-ui-components/breadcrumbs',
    element: <Breadcrumbs />,
  },
  {
    path: 'material-ui-components/button-group',
    element: <ButtonGroup />,
  },
  {
    path: 'material-ui-components/buttons',
    element: <Buttons />,
  },
  {
    path: 'material-ui-components/cards',
    element: <Cards />,
  },
  {
    path: 'material-ui-components/checkboxes',
    element: <Checkboxes />,
  },
  {
    path: 'material-ui-components/chips',
    element: <Chips />,
  },
  {
    path: 'material-ui-components/click-away-listener',
    element: <ClickAwayListener />,
  },
  {
    path: 'material-ui-components/container',
    element: <Container />,
  },
  {
    path: 'material-ui-components/css-baseline',
    element: <CssBaseline />,
  },
  {
    path: 'material-ui-components/dialogs',
    element: <Dialogs />,
  },
  {
    path: 'material-ui-components/dividers',
    element: <Dividers />,
  },
  {
    path: 'material-ui-components/drawers',
    element: <Drawers />,
  },
  {
    path: 'material-ui-components/floating-action-button',
    element: <FloatingActionButton />,
  },
  {
    path: 'material-ui-components/grid',
    element: <Grid />,
  },
  {
    path: 'material-ui-components/image-list',
    element: <ImageList />,
  },
  {
    path: 'material-ui-components/links',
    element: <Links />,
  },
  {
    path: 'material-ui-components/lists',
    element: <Lists />,
  },
  {
    path: 'material-ui-components/masonry',
    element: <Masonry />,
  },
  {
    path: 'material-ui-components/menus',
    element: <Menus />,
  },
  {
    path: 'material-ui-components/modal',
    element: <Modal />,
  },
  {
    path: 'material-ui-components/no-ssr',
    element: <NoSsr />,
  },
  {
    path: 'material-ui-components/pagination',
    element: <Pagination />,
  },
  {
    path: 'material-ui-components/paper',
    element: <Paper />,
  },
  {
    path: 'material-ui-components/popover',
    element: <Popover />,
  },
  {
    path: 'material-ui-components/popper',
    element: <Popper />,
  },
  {
    path: 'material-ui-components/portal',
    element: <Portal />,
  },
  {
    path: 'material-ui-components/progress',
    element: <Progress />,
  },
  {
    path: 'material-ui-components/radio-buttons',
    element: <RadioButtons />,
  },
  {
    path: 'material-ui-components/rating',
    element: <Rating />,
  },
  {
    path: 'material-ui-components/selects',
    element: <Selects />,
  },
  {
    path: 'material-ui-components/skeleton',
    element: <Skeleton />,
  },
  {
    path: 'material-ui-components/slider',
    element: <Slider />,
  },
  {
    path: 'material-ui-components/snackbars',
    element: <Snackbars />,
  },
  {
    path: 'material-ui-components/speed-dial',
    element: <SpeedDial />,
  },
  {
    path: 'material-ui-components/stack',
    element: <Stack />,
  },
  {
    path: 'material-ui-components/steppers',
    element: <Steppers />,
  },
  {
    path: 'material-ui-components/switches',
    element: <Switches />,
  },
  {
    path: 'material-ui-components/tables',
    element: <Tables />,
  },
  {
    path: 'material-ui-components/tabs',
    element: <Tabs />,
  },
  {
    path: 'material-ui-components/text-fields',
    element: <TextFields />,
  },
  {
    path: 'material-ui-components/textarea-autosize',
    element: <TextareaAutosize />,
  },
  {
    path: 'material-ui-components/timeline',
    element: <Timeline />,
  },
  {
    path: 'material-ui-components/toggle-button',
    element: <ToggleButton />,
  },
  {
    path: 'material-ui-components/tooltips',
    element: <Tooltips />,
  },
  {
    path: 'material-ui-components/transfer-list',
    element: <TransferList />,
  },
  {
    path: 'material-ui-components/transitions',
    element: <Transitions />,
  },
  {
    path: 'material-ui-components/tree-view',
    element: <TreeView />,
  },
  {
    path: 'material-ui-components/typography',
    element: <Typography />,
  },
];

export default MaterialUIComponentsRoutes;
