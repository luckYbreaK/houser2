module.exports = {
    readHouses: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.readHouses()
            .then(houses => res.status(200).send(houses))
            .catch(err => {
                res.status(500).send({errorMessage: "Jump ship! Jump ship! Server ain't working!"});
                console.log(err);             
            });
    }
}