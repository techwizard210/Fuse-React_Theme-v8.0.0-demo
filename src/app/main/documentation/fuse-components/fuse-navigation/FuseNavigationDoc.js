import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseUtils from '@fuse/utils';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import {
  appendNavigationItem,
  prependNavigationItem,
  removeNavigationItem,
  resetNavigation,
  setNavigation,
  updateNavigationItem,
} from 'app/store/fuse/navigationSlice';

function FuseNavigationDoc(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FuseNavigation
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseNavigation</code> is a custom-built Fuse component that allows you to create a
        multi-level collapsable navigation.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        [navigation]
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseNavigation</code> uses an array to populate the entire navigation. It supports
        four different navigation items; Group, Collapse, Item. and Divider. These items can be
        mixed and matched to create unique and complex navigation layouts.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        [layout]
      </Typography>

      <Typography className="mb-16" component="p">
        "vertical" or "horizontal" layout options.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        [active]
      </Typography>

      <Typography className="mb-16" component="p">
        You can set <b>active</b> to "square" to use square active item style instead of
        rounded/circle for <b>vertical layout</b>.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        [dense]
      </Typography>

      <Typography className="mb-16" component="p">
        You can use <b>{`dense={true}`}</b> to set dense variation of the navigation.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Usage
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                    <FuseNavigation navigation={navigation} layout="vertical" active="square" dense={true}/>
                                `}
      </FuseHighlight>

      <Typography className="mt-48 mb-8" variant="h4">
        Navigation item types
      </Typography>

      <Typography className="mt-32 p-8 rounded-4 bg-yellow-100 border-1 border-yellow-700 text-black mb-8">
        It is mandatory to give a unique id to all of your navigation items.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Group
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
              {
                id: 'apps',
                title: 'Applications',
                subtitle: 'Custom made application designs',
                type: 'group',
                icon: 'heroicons-outline:home',
                children: [
                  {
                    id: 'apps.academy',
                    title: 'Academy',
                    type: 'item',
                    icon: 'heroicons-outline:academic-cap',
                    url: '/apps/academy',
                  }
                ]
             }
        `}
      </FuseHighlight>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Collapse
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
            {
                id: 'apps.ecommerce',
                title: 'ECommerce',
                type: 'collapse',
                icon: 'heroicons-outline:shopping-cart',
                children: [
                  {
                    id: 'e-commerce-products',
                    title: 'Products',
                    type: 'item',
                    url: 'apps/e-commerce/products',
                    end: true,
                  },
              ]
            }
      `}
      </FuseHighlight>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Item
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
           {
              id: 'dashboards.project',
              title: 'Project',
              type: 'item',
              icon: 'heroicons-outline:clipboard-check',
              url: '/dashboards/project',
            }
        `}
      </FuseHighlight>
      <Typography className="text-20 mt-24 mb-8 font-medium" component="h2">
        end: bool
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
        When true, the active class/style will only be applied if the location is exactly matched.
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
          {
              id: 'dashboards.project',
              title: 'Project',
              type: 'item',
              icon: 'heroicons-outline:clipboard-check',
              url: '/dashboards/project',
              end: true
          }
                                `}
      </FuseHighlight>
      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Link
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
            {
                'id'    : 'test-link',
                'title' : 'Test Link',
                'type'  : 'link',
                'icon'  : 'link',
                'url'   : 'http://fusetheme.com',
                'target': '_blank'
            },
         `}
      </FuseHighlight>
      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Divider
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
          {
              'id'   : 'project',
              'title': 'Project',
              'type' : 'item',
              'url'  : '/apps/dashboards/project'
          }
          {
              'type': 'divider
          },
          {
              'id'   : 'project',
              'title': 'Project',
              'type' : 'item',
              'url'  : '/apps/dashboards/project'
          }
          `}
      </FuseHighlight>

      <Typography className="mt-48 mb-8" variant="h4">
        Actions
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        setNavigation
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
        Use <code>setNavigation(navigation{'<Array>'})</code> action to set/change whole navigation.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
          With the button below, whole navigation is changed.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              setNavigation([
                {
                  id: 'dashboards',
                  title: 'Dashboards',
                  subtitle: 'Unique dashboard designs',
                  type: 'group',
                  icon: 'heroicons-outline:home',
                  children: [
                    {
                      id: 'dashboards.project',
                      title: 'Project',
                      type: 'item',
                      icon: 'heroicons-outline:clipboard-check',
                      url: '/dashboards/project',
                    },
                    {
                      id: 'dashboards.analytics',
                      title: 'Analytics',
                      type: 'item',
                      icon: 'heroicons-outline:chart-pie',
                      url: '/dashboards/analytics',
                    },
                  ],
                },
                {
                  id: 'auth',
                  title: 'Auth',
                  type: 'group',
                  icon: 'verified_user',
                  children: [
                    {
                      id: 'sign-out',
                      title: 'Sign out',
                      type: 'item',
                      url: 'sign-out',
                      icon: 'exit_to_app',
                    },
                  ],
                },
              ])
            );
          }}
          variant="contained"
          color="secondary"
        >
          Set Navigation
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
          <Button
            onClick={() => {
              dispatch(
                setNavigation([
                  {
                    id: 'dashboards',
                    title: 'Dashboards',
                    subtitle: 'Unique dashboard designs',
                    type: 'group',
                    icon: 'heroicons-outline:home',
                    children: [
                      {
                        id: 'dashboards.project',
                        title: 'Project',
                        type: 'item',
                        icon: 'heroicons-outline:clipboard-check',
                        url: '/dashboards/project',
                      },
                      {
                        id: 'dashboards.analytics',
                        title: 'Analytics',
                        type: 'item',
                        icon: 'heroicons-outline:chart-pie',
                        url: '/dashboards/analytics',
                      },
                    ],
                  },
                  {
                    id: 'auth',
                    title: 'Auth',
                    type: 'group',
                    icon: 'verified_user',
                    children: [
                      {
                        id: 'sign-out',
                        title: 'Sign out',
                        type: 'item',
                        url: 'sign-out',
                        icon: 'exit_to_app',
                      },
                    ],
                  },
                ])
              );
            }}
            variant="contained"
            color="secondary"
          >
            Set Navigation
          </Button>
        `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        resetNavigation
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
        Use <code>resetNavigation()</code> action to reset navigation to initial state.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
          With the button below, navigation is returned to config defaults.
        </Typography>

        <Button
          onClick={() => {
            dispatch(resetNavigation());
          }}
          variant="contained"
          color="secondary"
        >
          Reset Navigation
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
            <Button
                onClick={()=> {
                    dispatch(resetNavigation());
                }}
                variant="contained"
                color="secondary"
            >
                Reset Navigation
            </Button>
            `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        updateNavigationItem
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
        Use
        <code>
          updateNavigationItem(id, <i>object</i>)
        </code>
        action to update a navigation item.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
          With the button below, 'dashboards' title changes, and a badge is added.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              updateNavigationItem('dashboards', {
                title: 'All Dashboards',
              })
            );
          }}
          variant="contained"
          color="secondary"
        >
          Update Navigation Item
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
          <Button
            onClick={() => {
              dispatch(
                updateNavigationItem('dashboards', {
                  title: 'All Dashboards',
                })
              );
            }}
            variant="contained"
            color="secondary"
          >
            Update Navigation Item
          </Button>
        `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        removeNavigationItem
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
        Use <code>removeNavigationItem(id)</code> action to remove a navigation item.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
          With the button below, "Calendar" navigation item is removed.
        </Typography>

        <Button
          onClick={() => {
            dispatch(removeNavigationItem('apps.calendar'));
          }}
          variant="contained"
          color="secondary"
        >
          Remove Navigation Item
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
            <Button
                  onClick={()=> {
                      dispatch(removeNavigationItem('apps.calendar'))
                  }}
                  variant="contained"
                  color="secondary"
            >
            Remove Navigation Item
            </Button>
      `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        prependNavigationItem
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
        Use
        <code>
          prependNavigationItem(<i>object</i>, <i>collapseId/groupId</i>?)
        </code>
        action to prepend a navigation item into the navigation array.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
          With the button below, "fusetheme.com" navigation item is added at the top of the
          navigation array.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              prependNavigationItem({
                id: `test-link-${FuseUtils.generateGUID()}`,
                title: 'fusetheme.com',
                type: 'link',
                icon: 'link',
                url: 'http://fusetheme.com',
                target: '_blank',
              })
            );
          }}
          variant="contained"
          color="secondary"
        >
          Prepend Navigation Item
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
            <Button
                onClick={()=> {
                    dispatch(prependNavigationItem(
                        {
                            'id'    : 'test-link',
                            'title' : 'fusetheme.com',
                            'type'  : 'link',
                            'icon'  : 'link',
                            'url'   : 'http://fusetheme.com',
                            'target': '_blank'
                        }
                    ))
                }}
                variant="contained"
                color="secondary"
            >
                Prepend Navigation Item
            </Button>
            `}
        </FuseHighlight>
      </div>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
          With the button below, "fusetheme.com" navigation item is added into the top of the
          "Dashboards" children.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              prependNavigationItem(
                {
                  id: `test-link-${FuseUtils.generateGUID()}`,
                  title: 'fusetheme.com',
                  type: 'link',
                  icon: 'link',
                  url: 'http://fusetheme.com',
                  target: '_blank',
                },
                'dashboards'
              )
            );
          }}
          variant="contained"
          color="secondary"
        >
          Prepend Navigation Item
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
                                <Button
                                    onClick={()=> {
                                        dispatch(prependNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Prepend Navigation Item
                                </Button>
                                `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        appendNavigationItem
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
        Use
        <code>
          appendNavigationItem(<i>object</i>, <i>collapseId/groupId</i>?)
        </code>
        action to append a navigation item into the navigation array.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
          With the button below, "fusetheme.com" navigation item is added at the bottom of the
          array.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              appendNavigationItem({
                id: `test-link-${FuseUtils.generateGUID()}`,
                title: 'fusetheme.com',
                type: 'link',
                icon: 'link',
                url: 'http://fusetheme.com',
                target: '_blank',
              })
            );
          }}
          variant="contained"
          color="secondary"
        >
          Append Navigation Item
        </Button>
        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
            <Button
                onClick={()=> {
                    dispatch(appendNavigationItem(
                        {
                            'id'    : 'test-link',
                            'title' : 'fusetheme.com',
                            'type'  : 'link',
                            'icon'  : 'link',
                            'url'   : 'http://fusetheme.com',
                            'target': '_blank'
                        }
                    ))
                }}
                variant="contained"
                color="secondary"
            >
                Append Navigation Item
            </Button>
            `}
        </FuseHighlight>
      </div>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
          With the button below, "fusetheme.com" navigation item is added into the bottom of the
          "Dashboards" children.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              appendNavigationItem(
                {
                  id: `test-link-${FuseUtils.generateGUID()}`,
                  title: 'fusetheme.com',
                  type: 'link',
                  icon: 'link',
                  url: 'http://fusetheme.com',
                  target: '_blank',
                },
                'dashboards'
              )
            );
          }}
          variant="contained"
          color="secondary"
        >
          Append Navigation Item
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
                                <Button
                                    onClick={()=> {
                                        dispatch(appendNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Append Navigation Item
                                </Button>
                                `}
        </FuseHighlight>
      </div>
    </>
  );
}

export default FuseNavigationDoc;
