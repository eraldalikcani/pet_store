import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { Pet } from "../../app/models/pet";

interface Props {
    pets: Pet;
}

export default function PetCard({ pets }: Props) {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {pets.name?.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={pets.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                image={pets.photoUrls[0]}
                title={pets.name} 
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    Status: {pets.status}
                </Typography>
            </CardContent>
        </Card>
    )
}