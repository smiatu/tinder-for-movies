import axios from "axios";

export const swipeHandler = async (direction, id) => {
    if(direction === 'right'){
        await acceptMovie(id);
        return;
    }
    await rejectMovie(id);
};
export const acceptMovie = async (id) => {
    const result = await axios(
        `http://localhost:3000/recommendations/${id}`,
    );
    axios.put(`http://localhost:3000/recommendations/${id}`, {
        ...result.data,
        accept: {
            value: true
        }
    }).then(resp => {
        console.log(resp.data);
    }).catch(error => {
        console.log(error);
    });
};
export const rejectMovie = async (id) => {
    const result = await axios(
        `http://localhost:3000/recommendations/${id}`,
    );
    axios.put(`http://localhost:3000/recommendations/${id}`, {
        ...result.data,
        reject: {
            value: true
        }
    }).then(resp => {
        console.log(resp.data);
    }).catch(error => {
        console.log(error);
    });
};