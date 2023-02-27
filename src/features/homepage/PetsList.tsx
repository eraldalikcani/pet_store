import { Grid } from "@mui/material";
import { Pet } from "../../app/models/pet";
import PetCard from "./PetCard";


interface Props {
    pets: Pet[];
}

export default function PetsList({ pets }: Props) {
    return (
        <Grid container spacing={4}>
            {pets.map((pet: Pet,index: any) => (
                <Grid item xs={3} key={index}>
                    <PetCard pets={pet} />
                </Grid>
            ))}
        </Grid>
    )
}