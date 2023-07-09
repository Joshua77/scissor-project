import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { app, db } from "../../utils/init-firebase";
import {
  doc,
  getDoc,
  addDoc,
  updateDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { CircularProgress, Box, Typography } from "@mui/material";

//check the updatedoc the collection I added
//confirm that it is linkID and not linkDOCid

const LinkRedirect = () => {
  const { shortCode } = useParams();
  const [loading, setLoading] = useState(true);

  // const linksPath = useMemo(
  //   () => collection(doc(db, "users", userUid), "links"),
  //   [userUid]
  // );

  useEffect(() => {
    const fetchLinkDoc = async () => {
      if (shortCode.length !== 6) return setLoading(false);
      const linkDoc = await getDoc(doc(db, "links", shortCode));

      if (linkDoc.exists()) {
        const { longURL, linkID, userUid } = linkDoc.data();
        await updateDoc(doc(db, "users", userUid, "links", linkID), {
          totalClicks: increment(1),
        });
        window.location.href = longURL;
      } else {
        setLoading(false);
      }
    };
    fetchLinkDoc();
  }, []);

  if (loading)
    return (
      <Box mt={10} textAlign="center">
        <CircularProgress />
        <Typography>Redirecting to the link</Typography>
      </Box>
    );
  else
    return (
      <Box mt={10} textAlign="center">
        <Typography>Link is invalid</Typography>
      </Box>
    );
};

export default LinkRedirect;
