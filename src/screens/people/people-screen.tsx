import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Grid, Box, TextareaAutosize, Typography} from "@mui/material";
import {POST_DATA} from "../../config/customData";
import {CAW} from "../../components/layout/caw";
import {Button} from "@mui/material";
import MainLayout from "../../layouts/MainLayout";
import { Api, PersonFormatted } from "../../services/api";

const MAIN = {
    animation: "fadeInUpBig",
    animationDuration: "1s"
}
const NEW_POST_BUTTON = {
    position: "fixed",
    bottom: "0",
    right: "0",
    marginRight: "25px",
    marginBottom: "80px",
    width: "54px",
    height: "54px",
    borderRadius: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "25px",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "krmrPlate.newPostButton",
    border: "3px solid #000",
    borderColor:"krmrPlate.newPostBorder",
    color: "krmrPlate.newPostBorder",
    zIndex:4
}

const MODAL = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 395,
    p: 1,
    borderRadius: "14px",
    background: "krmrPlate.newPostContainer",
};



export const PeopleScreen = observer(() => {
    const dataExample = [
        { "no": 1, "name": "Alden", "age": 24, "birthday": "1999.12.12" },
        { "no": 2, "name": "Briony", "age": 32, "birthday": "1990.05.10" },
        { "no": 3, "name": "Cedric", "age": 28, "birthday": "1995.08.20" }
    ];

    const [textareaValue, setTextareaValue] = useState("");
    const [formattedData, setFormattedData] = useState<PersonFormatted | null>(null);
    const api = new Api();

    const formatData = async () => {
        try {
            const people = JSON.parse(textareaValue);
            const response = await api.people.postPeople(people);
            if (response.kind == "ok") {
                setFormattedData(response.people);
            } else {
                throw new Error("API Error");
            }
        } catch (error) {
            console.error("Invalid JSON format:", error);
        }
    }

    return (
        <MainLayout disableGutters fullWidth>
            <Typography align="center" variant="h2" component="h2" gutterBottom sx={{width: "100%"}}>
                Insert your people data here
            </Typography>
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder={JSON.stringify(dataExample, null, 2)}
                style={{ width: 200 }}
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
            />
            <Button variant="contained" onClick={formatData}>Format</Button>

            {formattedData && (
                <Box mt={2}>
                    <Typography variant="h6">Formatted Data:</Typography>
                    <pre>{JSON.stringify(formattedData, null, 2)}</pre>
                </Box>
            )}
        </MainLayout>
    )
});
