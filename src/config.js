const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: false,
                    origin: "https://athenapi.herokuapp.com/api/reviews",
                    credentials: false
                }
            ]
        }
}
}

////a holaaas 
///detectame fuch