import { FC, useEffect, useState } from "react";
import { useMainContext } from "../contexts/mainContext";
import "../css/first.css";

import ImageMasonry from "./masonry";
import Dropzone from "react-dropzone";
import { Button, Grid, Stack, Typography, capitalize } from "@mui/material";
import { useParams } from "react-router-dom";
import { FilesService } from "../client";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useTranslation } from "react-i18next";

const ImageList: FC<{}> = () => {
  const { t } = useTranslation()
  const [files, setFiles] = useState<any[]>([]);
  const { projects, updateListFile, setCurrentDeployment, currentDeployment, deploymentData } =
    useMainContext();
  let params = useParams();

  useEffect(() => {
    (async () => {
      setCurrentDeployment(Number(params.deploymentId));
    })();
  }, [projects]);

  const save = () => {
    for (const file of files) {
      FilesService
      .uploadFileFilesUploadDeploymentIdPost(Number(params.deploymentId), { file })
      .then((res) => {
        updateListFile();
      });
    }
    clear();
  };

  const clear = () => {
    setFiles([]);
  };

  const loadFile = (f: any) => {
    f.forEach((f) => files.push(f));
    setFiles(files);
  };

  const dropZoneDisplayText = () => {
    if (files.length === 0) {
      return (
        <p>{capitalize(t("deployments.drop_files"))}</p>
      );
    } else {
      return <p>{files.map((f) => f.name).join(", ")}</p>;
    }
  };

  return (
    <>
      {deploymentData ? (
        <Stack spacing={2}>
          <Typography variant="h6" sx={{ mb:2}}>{capitalize(t("projects.import_media"))}</Typography>
          <Dropzone onDrop={loadFile} multiple maxFiles={10}>
            {({ getRootProps, getInputProps }) => (
              <section id="dropzone">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Grid container direction="column" alignItems='center'>
                    <Grid item>
                      <CameraAltIcon fontSize="large" />
                    </Grid>
                    <Grid item>
                      {dropZoneDisplayText()}
                    </Grid>
                  </Grid>

                </div>
              </section>
            )}
          </Dropzone>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button 
              onClick={clear} 
              color="primary"
            >
              {capitalize(t("main.cancel"))}
            </Button>
            <Button 
              variant="contained" 
              onClick={save} 
              color="primary"
            >
              {capitalize(t("main.save"))}
            </Button>
          </Stack>
          <ImageMasonry />
        </Stack>
      ) : (
        <Stack>
          <p>{capitalize(t("deployments.unknown"))}</p>
        </Stack>
      )}
    </>
  );
};

export default ImageList;
