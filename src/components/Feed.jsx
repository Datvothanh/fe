import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";


const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [100]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }} >
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={30} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={400} />
          <Skeleton variant="text" height={101} />
          <Skeleton variant="text" height={30} />
          <Skeleton variant="text" height={30} />
        </Stack>
      ) : (
        <>
          {/* <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post /> */}
        </>
      )}
    </Box>
  );
};

export default Feed;
