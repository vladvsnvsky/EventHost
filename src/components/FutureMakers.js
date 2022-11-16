import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardMedia } from '@mui/material';

function FutureMakers() {
    const cards = [1];
    return (
        <div>
    <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10%', ///daca modific aici se va lungi cardul pe verticala
                    }}
                    image="data:image/png;base64,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" ///image source-ul 
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Future Makers
                    </Typography>
                    <Typography>
                      Where future is being built.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained">MINT with your card</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      </div>
    );
}

export default FutureMakers