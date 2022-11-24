const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true,
                    origin: "https://athenapi.herokuapp.com/api/reviews",
                    credentials: true
                }
            ]
        }
}
}

////a holaaas 
///detectame fuch