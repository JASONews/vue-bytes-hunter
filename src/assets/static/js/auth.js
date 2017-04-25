function ListItem(desc, startDate, endDate, isCompleted, order) {
    this.description = desc;
    this.startDate = startDate;
    this.endDate = endDate;
    this.completed = isCompleted;
    this.order = order;
}

var userid;

function oSignIn(googleUser) {
    // Useful data for your client-side scripts:
    // console.log("onSignIn");
    // var event = new CustomEvent('signinsuccess', { 'detail': googleUser });
    // document.dispatchEvent(event);
    // var profile = googleUser.getBasicProfile();
    // console.log(profile);
    // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    // console.log('Full Name: ' + profile.getName());
    // console.log('Given Name: ' + profile.getGivenName());
    // console.log('Family Name: ' + profile.getFamilyName());
    // console.log("Image URL: " + profile.getImageUrl());
    // console.log("Email: " + profile.getEmail());
    // userid = profile.getId()
    // // The ID token you need to pass to your backend:
    // var id_token = googleUser.getAuthResponse().id_token;
    // userid = profile.getId();
    // Cookies.remove("userid");
    // Cookies.set("userid", userid);
    // console.log("ID Token: " + id_token);
    window.googleUser = googleUser;
    $("#toogleBtn").trigger("click");
    // app.bus.$emit("signin", "haha");
    // $.post("/account/auth", {id_token: id_token}, function (res) {
    //     console.log(res);
    //     window.location = "/";
    //     // window.location = "/account/home";
    //     }
    // );
};

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        window.location = "/account/signout";
    });
}


function myPost(url, data, fun) {
    $.ajax({
        url:url,
        type:"POST",
        headers: {
            'Accept': 'application/json; charset=utf-8',
            'Content-Type': 'application/json; charset=utf-8'
        },
        data:JSON.stringify(data),
        dataType:"json",
        success: fun
    })
}

function myGet(url, fun) {
    $.ajax({
        url:url,
        type:"GET",
        headers: {
            Accept: "application/json; charset=utf-8"
        },
        success: fun
    })
}

function test() {

    // Retrieve Todolist
    // HTTP GET /todolist/{userid}
    $.get("/todolist/"+userid, function (res) {
        console.log(res);
    });

    // Create TodoList
    // HTTP POST /todolist/{userid}
    // Body {name: “abc”, owner: “eee”}
    myPost("/todolist/"+userid, {"name": "a", owner: userid}, function (res) {
        console.log(res);
        // Delete TodoList
        // /todolist/delete/{listkey}
       $.get("/todolist/delete/"+res, function (res1) {
           console.log(res1);
       })
    });


    myPost("/todolist/"+userid, {name: "b", "owner": userid}, function (res) {
        console.log(res);
        // update/insert list items
        // HTTP POST /item/insert/{listid}
        // Body Eg. {list : [item1, item2, …]}
        myPost("/item/insert/"+res,
            {list: [new ListItem("hah", Date.now(), Date.now(), false, 1),
                new ListItem("ccc", Date.now(), Date.now(), false, 2)]},
        function (res3) {
            $.get("/item/list/"+res, function (res2) {
                console.log(res2);
                var del = [];
                for (var i in res2) {
                    del.push(res2[i].id);
                }
                myPost("/item/delete", {list: del}, function (res4) {
                    console.log(res4);
                })
            })
        })
    });

    // Retrieve Items
    // HTTP GET /item/list/{listId}


    // Delete Items
    // HTTP POST /item/delete
    //     Body Eg. {list : [“11”, “12412”, …(item id)]}


}

// $(function () {
//     setTimeout( function () {
//         $(".abcRioButtonLightBlue").addClass("loginBtn");
//     }, 100);
// });
