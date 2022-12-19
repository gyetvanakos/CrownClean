import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Interior() {
  return (
    <div class="h-full w-full sm:w-1/2 pb-20">
        <Card className="box-content" sx={{ width: 1 }}>
            <CardContent className="bg-[#242526]">
                <Typography gutterBottom variant="h5" component="div">
                    <h1 className="text-white text-3xl p-4 md:p-9">Interior</h1>
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    <p className="text-white">Learn more about our services</p>
                </Typography>
            </CardContent>
            <CardMedia
                  component="img"
                  height="100"
                  image="https://firebasestorage.googleapis.com/v0/b/crownclean-41562.appspot.com/o/images%2F1671325220201315222288_616740383577942_8516053303248232347_n.jpg?alt=media&token=d49e305e-5f5d-4a38-aa29-ce36e3b530e6"
                  alt="bmw"
            />
            <CardContent className="bg-[#242526]">
                <Typography variant="body2">
                    <div className="box-content flex flex-col justfiy-center items-center md:flex-row">
                      <div className="w-full flex-col justfiy-center items-center">
                        <li className="text-white p-2">Full interior extraction and vacuum detail Including boot area.</li>
                        <li className="text-white p-2">Seats and carpets shampooed and extracted.</li>
                        <li className="text-white p-2">Full interior steam cleaning and disinfectant process carried out.</li>
                        <li className="text-white p-2">Leather professionally cleaned and protected.</li>
                        <li className="text-white p-2">Roof lining steam cleaned.</li>
                        <li className="text-white p-2">Boot and spare wheel bay cleaned and steamed.</li>
                        <li className="text-white p-2">Door shuts deep cleaned, polished and protected.</li>
                        <li className="text-white p-2">All interior windows cleaned and polished.</li>
                        <li className="text-white p-2">Floor matts and carpets shampooed and left with our signature design or fresh clean look.</li>
                        <li className="text-white p-2">Car is left with luxury desired scents or hanging air freshener.</li>
                      </div>
                    </div>
                </Typography>
            </CardContent>
          </Card>
    </div>
  );
}

export default Interior;
