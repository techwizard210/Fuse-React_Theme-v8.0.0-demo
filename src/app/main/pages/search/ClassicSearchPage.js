import FusePageSimple from '@fuse/core/FusePageSimple';
import { blue, green } from '@mui/material/colors';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import exampleSearchResponse from './exampleSearchResponse';

function ClassicSearchPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(exampleSearchResponse);
    }, 100);
  }, []);

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
    <FusePageSimple
      header={
        <div className="flex flex-1 items-center p-24 sm:p-32 w-full max-w-md">
          <Paper className="flex items-center h-44 w-full px-16 rounded-16 shadow">
            <Input
              placeholder="Search..."
              disableUnderline
              fullWidth
              inputProps={{
                'aria-label': 'Search',
              }}
            />
            <FuseSvgIcon color="action">heroicons-outline:search</FuseSvgIcon>
          </Paper>
        </div>
      }
      content={
        <div className="flex flex-col flex-auto h-full p-24 pt-0 sm:p-32 sm:pt-0 w-full max-w-md">
          <div className="flex flex-1 flex-col">
            {data.length > 0 && (
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <Typography color="text.secondary" className="text-13 mb-24">
                    {data.length} results
                  </Typography>
                </motion.div>

                {data.map((_item) => (
                  <motion.div variants={item} className="mb-28" key={_item.id}>
                    <Typography
                      className="text-18 cursor-pointer"
                      sx={{
                        color: blue[800],
                      }}
                    >
                      {_item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: green[800],
                      }}
                    >
                      {_item.url}
                    </Typography>
                    <Typography className="text-13">{_item.excerpt}</Typography>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          <div className="flex justify-center mt-48">
            <Pagination count={10} color="secondary" />
          </div>
        </div>
      }
    />
  );
}

export default ClassicSearchPage;
