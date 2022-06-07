import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function PhotosVideosTab() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/profile/photos-videos').then((res) => {
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
        <div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">
          {data.map((period) => (
            <div key={period.id} className="mb-48">
              <ListSubheader
                component={motion.div}
                variants={item}
                className="flex items-center px-0 mb-24 bg-transparent"
              >
                <Typography className="text-2xl font-semibold leading-tight">
                  {period.name}
                </Typography>
                <Typography className="mx-12 font-medium leading-tight" color="text.secondary">
                  {period.info}
                </Typography>
              </ListSubheader>

              <div className="overflow-hidden flex flex-wrap -m-8">
                {period.media.map((media) => (
                  <div className="w-full sm:w-1/2 md:w-1/4 p-8" key={media.preview}>
                    <ImageListItem
                      component={motion.div}
                      variants={item}
                      className="w-full rounded-16 shadow overflow-hidden"
                    >
                      <img src={media.preview} alt={media.title} />
                      <ImageListItemBar
                        title={media.title}
                        actionIcon={
                          <IconButton size="large">
                            <FuseSvgIcon className="text-white opacity-75">
                              heroicons-outline:information-circle
                            </FuseSvgIcon>
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default PhotosVideosTab;
