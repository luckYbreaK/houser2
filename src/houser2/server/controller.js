module.exports = {
    readHouses: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.readHouses()
            .then(houses => res.status(200).send(houses))
            .catch(err => {
                res.status(500).send({ errorMessage: "Jump ship! Jump ship! Server ain't working!" });
                console.log(err);
            });
    },

    updateHouse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, address, city, state, zip, img, mortgage, rent } = req.body

        dbInstance.updateHouse([name, address, city, state, zip, img, mortgage, rent])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Jump ship! Jump ship! Server ain't working!" });
                console.log(err);
            });
    },

    deleteHouse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.deleteHouse([id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Jump ship! Jump ship! Server ain't working!" });
                console.log(err);
            });
    }
}