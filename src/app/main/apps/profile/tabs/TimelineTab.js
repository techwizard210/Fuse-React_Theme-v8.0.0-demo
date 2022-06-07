import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { lighten } from '@mui/material/styles';
import Box from '@mui/material/Box';

function TimelineTab() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/profile/timeline').then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) {
    return null;
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full">
      <div className="md:flex">
        <div className="flex flex-col w-full md:w-320 md:ltr:mr-32 md:rtl:ml-32">
          <Card component={motion.div} variants={item} className="flex flex-col w-full px-32 pt-24">
            <div className="flex justify-between items-center pb-16">
              <Typography className="text-2xl font-semibold leading-tight">
                Latest Activity
              </Typography>
              <Button color="inherit" size="small" className="font-medium -mx-8">
                See All
              </Button>
            </div>

            <CardContent className="p-0">
              <List className="p-0">
                {data.activities.map((activity) => (
                  <ListItem key={activity.id} className="px-0 space-x-12">
                    <Avatar className="" alt={activity.user.name} src={activity.user.avatar} />
                    <ListItemText
                      className="flex-1"
                      primary={
                        <div className="flex">
                          <Typography
                            className="font-normal whitespace-nowrap"
                            color="secondary"
                            paragraph={false}
                          >
                            {activity.user.name}
                          </Typography>

                          <Typography className="px-4 truncate" paragraph={false}>
                            {activity.message}
                          </Typography>
                        </div>
                      }
                      secondary={activity.time}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col flex-1">
          <Card
            component={motion.div}
            variants={item}
            className="w-full overflow-hidden w-full mb-32"
          >
            <Input
              className="p-24 w-full"
              classes={{ root: 'text-14' }}
              placeholder="Write something.."
              multiline
              rows="6"
              margin="none"
              disableUnderline
            />
            <Box
              className="card-footer flex items-center flex-row border-t-1 px-24 py-12"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
            >
              <div className="flex flex-1 items-center">
                <IconButton aria-label="Add photo">
                  <FuseSvgIcon size={20}>heroicons-solid:photograph</FuseSvgIcon>
                </IconButton>
                <IconButton aria-label="Mention somebody">
                  <FuseSvgIcon size={20}>heroicons-solid:user</FuseSvgIcon>
                </IconButton>
                <IconButton aria-label="Add location">
                  <FuseSvgIcon size={20}>heroicons-solid:location-marker</FuseSvgIcon>
                </IconButton>
              </div>

              <div className="">
                <Button variant="contained" color="secondary" size="small" aria-label="post">
                  Post
                </Button>
              </div>
            </Box>
          </Card>

          {data.posts.map((post) => (
            <Card component={motion.div} variants={item} key={post.id} className="mb-32">
              <CardHeader
                className="px-32 pt-24"
                avatar={<Avatar aria-label="Recipe" src={post.user.avatar} />}
                action={
                  <IconButton aria-label="more" size="large">
                    <FuseSvgIcon>heroicons-outline:dots-vertical</FuseSvgIcon>
                  </IconButton>
                }
                title={
                  <span className="flex items-center space-x-8">
                    <Typography className="font-normal" color="secondary.main" paragraph={false}>
                      {post.user.name}
                    </Typography>
                    <span>
                      {post.type === 'post' && 'posted on your timeline'}
                      {post.type === 'something' && 'shared something with you'}
                      {post.type === 'video' && 'shared a video with you'}
                      {post.type === 'article' && 'shared an article with you'}
                    </span>
                  </span>
                }
                subheader={post.time}
              />

              <CardContent className="px-32">
                {post.message && (
                  <Typography component="p" className="mb-16">
                    {post.message}
                  </Typography>
                )}

                {post.media && <img src={post.media.preview} alt="post" className="rounded-8" />}

                {post.article && (
                  <div className="border-1 rounded-8 overflow-hidden">
                    <img
                      className="w-full border-b-1"
                      src={post.article.media.preview}
                      alt="article"
                    />
                    <div className="p-16">
                      <Typography variant="subtitle1">{post.article.title}</Typography>
                      <Typography variant="caption">{post.article.subtitle}</Typography>
                      <Typography className="mt-16">{post.article.excerpt}</Typography>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardActions disableSpacing className="px-32">
                <Button size="small" aria-label="Add to favorites">
                  <FuseSvgIcon size={16} color="action">
                    heroicons-outline:heart
                  </FuseSvgIcon>
                  <Typography className="mx-4">Like</Typography>
                  <Typography>({post.like})</Typography>
                </Button>
                <Button aria-label="Share">
                  <FuseSvgIcon size={16} color="action">
                    heroicons-outline:share
                  </FuseSvgIcon>
                  <Typography className="mx-4">Share</Typography>
                  <Typography>({post.share})</Typography>
                </Button>
              </CardActions>

              <Box
                className="card-footer flex flex-col px-32 py-24 border-t-1"
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? lighten(theme.palette.background.default, 0.4)
                      : lighten(theme.palette.background.default, 0.02),
                }}
              >
                {post.comments && post.comments.length > 0 && (
                  <div className="">
                    <div className="flex items-center">
                      <Typography>{post.comments.length} comments</Typography>
                      <FuseSvgIcon size={16} className="mx-4" color="action">
                        heroicons-outline:chevron-down
                      </FuseSvgIcon>
                    </div>

                    <List>
                      {post.comments.map((comment) => (
                        <div key={comment.id}>
                          <ListItem className="px-0 -mx-8">
                            <Avatar
                              alt={comment.user.name}
                              src={comment.user.avatar}
                              className="mx-8"
                            />
                            <ListItemText
                              className="px-4"
                              primary={
                                <div className="flex items-center space-x-8">
                                  <Typography
                                    className="font-normal"
                                    color="secondary"
                                    paragraph={false}
                                  >
                                    {comment.user.name}
                                  </Typography>
                                  <Typography variant="caption">{comment.time}</Typography>
                                </div>
                              }
                              secondary={comment.message}
                            />
                          </ListItem>
                          <div className="flex items-center mx-52 mb-8">
                            <Button
                              endIcon={<FuseSvgIcon size={14}>heroicons-outline:reply</FuseSvgIcon>}
                            >
                              Reply
                            </Button>
                          </div>
                        </div>
                      ))}
                    </List>
                  </div>
                )}

                <div className="flex flex-auto -mx-4">
                  <Avatar className="mx-4" src="assets/images/avatars/profile.jpg" />
                  <div className="flex flex-col flex-1 mx-4 items-end">
                    <Paper className="w-full mb-16 shadow-0 border-1  overflow-hidden">
                      <Input
                        className="p-12 w-full"
                        classes={{ root: 'text-13' }}
                        placeholder="Add a comment.."
                        multiline
                        rows="6"
                        margin="none"
                        disableUnderline
                      />
                    </Paper>
                    <div>
                      <Button variant="contained" color="secondary" size="small">
                        Post comment
                      </Button>
                    </div>
                  </div>
                </div>
              </Box>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default TimelineTab;
