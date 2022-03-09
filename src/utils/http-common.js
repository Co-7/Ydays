import axios from "axios";

// ! Bearer Token temporaire
export default axios.create({
    baseURL: "https://api.fmv.medianova.xyz/api",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDY4MjE1MjksImV4cCI6MTY0NjgyNTEyOSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoic3RyaW5nIn0.mA-0Rq-PyVi1l2TkJOLm2kh2LV7HBfemIdCAxf9VYKEsMEWHlZa7gE9Qxu6nGKoG7jMYn18Ffvr3gPRqWuW-0npCqojmGT488Lf-4YxP3-jnQeOPyH_oRUVevXGAS7cLBcjjT98P-jVSGeG-s2Jijo7WNY1Bb7TZAVh37jHKBE15QFHUSNS_eCqA1JklxCpz_VE-iq93P6QJck5ibKR5_xYEFOdBlwBUT2-JuDr9c8qHNKsCZ288jrXDESZRP3Lgg_cz7Aw_2saYHG7aVTkD8madHRKWnBAUEHhLJN2NIgIoQlLSF5YTW8HWqdKQUiDEhGMHwNDB-nm02CLj0pZgTw',
    }
})