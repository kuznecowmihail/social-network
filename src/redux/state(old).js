import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer'; 
import menuReducer from './menu-reducer'; 

let store = {
    _state: {
        profileData: {
            info: {
                name: "Mike",
                age: 22,
                descriprion: "Software Developer",
                avatarSrc: 'https://c.pxhere.com/photos/54/aa/cat_animal_nature_close_up-1106847.jpg!d'
            },
            posts: [
                { id: "1", text: "Hi, how are you?", likesCount: 5 },
                { id: "2", text: "It's my first post", likesCount: 8 },
                { id: "3", text: "post 3", likesCount: 0 }
            ],
            newPostTextAreaValue: ''
        },
        dialogsData: {
            dialogs: [
                {
                    id: "1",
                    name: "Leha",
                    lastMessage: "React top",
                    img: "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if2/2oh57aD0oSjrv847hVcutBzqQTX96-4lgItMXtTcUu19mWty9vrcIhvDpVF6kk-DWV4unqMmatkM1Y0DUpXwUy6-.jpg?size=100x0&quality=96&crop=66,66,368,368&ava=1"
                },
                {
                    id: "2",
                    name: "Egor",
                    lastMessage: "Net, Angular!",
                    img: "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/RBOLRnjbWKM34H6UJfuqGxm9fKuOXnlyQKZjv2do50G0zut16xF1V6LXXii_lAHj-PzcSRgO.jpg?size=100x0&quality=96&crop=5,7,1067,1067&ava=1"
                },
                {
                    id: "3",
                    name: "Roman",
                    lastMessage: "ti pidor",
                    img: "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/uRptmUr11NuWiJmmn9klurCOcLtW1G_aITyoNy_a_H1j59DaywgR8-KodEkMKYLlET0MNG0v_vdb55EJbrqhAmyd.jpg?size=100x0&quality=96&crop=529,88,1571,1571&ava=1"
                },
                {
                    id: "4",
                    name: "Mamochka",
                    lastMessage: "))))",
                    img: "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if2/laX1m4-J7EyVDRiAbeeLfv6OlQt9vLPK2oDUq1P88bLM49QTJOFN-HI3a23WoT8WG1T5nQLVbSJ7-xmQ-Lw1jcHH.jpg?size=100x0&quality=96&crop=708,440,733,733&ava=1"
                },
                {
                    id: "5",
                    name: "Artem",
                    lastMessage: "Peretrahalsuua v vannoy",
                    img: "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/_5fnulVEwgeqRjzP_Y1HT9shJnPspJR2pWMZxP99yLdL__nuvn-tpISqfHJemjbOpVbKzgf3.jpg?size=100x0&quality=96&crop=0,274,806,806&ava=1"
                },
                {
                    id: "6",
                    name: "Arnold",
                    lastMessage: "Ti sho mne uebal",
                    img: "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/uD9OTaHXTK2weBWPv0oaRXRUKkenkKIKPYjd3c1MIYa4vK9OjZliUjwDbNkYbrY9AONiDKnC.jpg?size=100x0&quality=96&crop=0,0,2047,2047&ava=1"
                },
                {
                    id: "7",
                    name: "Slava",
                    lastMessage: "Ya ne skazal a podumal",
                    img: "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/--6WUd6xtK_9Bp6UP2yWv8rf8wUnXQOOtoT4r5VCcnkYIeyX3YebSWyv6vgH7q4c6KX57_u7RZ4Pf6f82SKNDP4S.jpg?size=100x0&quality=96&crop=0,324,1620,1620&ava=1"
                },
                {
                    id: "8",
                    name: "Ilya",
                    lastMessage: "Kreed",
                    img: "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/dG5Pepcj9YHGKtZMATcXg-wEiAp4qiM6rdWMiB7TqDeXcyWSpu5lTtfWd1Go9Cx-grRCpEihDxonr5Rlzn4jhfDw.jpg?size=100x0&quality=96&crop=297,260,1154,1154&ava=1"
                },
                {
                    id: "9",
                    name: "Vlad",
                    lastMessage: "Ebatsya budem zavtra",
                    img: "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/VGtWnc0-dvGbbinjCElNoLH6LLX2btgmpK-5X6RCsRXO8-yEvl4CSXibcVr2L5PKPE3F2lAjVtGYRXSpTtFcwUOd.jpg?size=100x0&quality=96&crop=0,313,1620,1620&ava=1"
                },
                {
                    id: "10",
                    name: "Timurka",
                    lastMessage: "Vidite dolbaeb",
                    img: "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/nrS1p6sS8UD9I-NB2iUGlXi_QIO15Nd94fEHQPB8b_kXUyHMkHM23kmJEnkfeYYDrZzrEocH.jpg?size=100x0&quality=96&crop=224,190,338,338&ava=1"
                },
                {
                    id: "11",
                    name: "Angelina",
                    lastMessage: "Egoooor",
                    img: "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/6EafUSnjkRA6GGXrfd3OU668wrYn25hKevk2-GUPPLfBdL9xp-ppORmX-hfJRImwA_E462-N.jpg?size=100x0&quality=96&crop=0,0,623,623&ava=1"
                },
                {
                    id: "12",
                    name: "Aleksey",
                    lastMessage: "Butaforskaya svad'ba",
                    img: "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/tDmbaBxIeDmI0NmuAZs7Rcvo7SkwM2d10tSU3MwnuScuBabunRnMDKt_whjPSVzdIHHxhjan.jpg?size=100x0&quality=96&crop=88,26,750,750&ava=1"
                }
            ],
            messages: [
                {
                    id: "1",
                    message: "hi",
                    direction: 'me'
                },
                {
                    id: "2",
                    message: "hi",
                    direction: 'companion'
                },
                {
                    id: "3",
                    message: "how are you?",
                    direction: 'me'
                },
                {
                    id: "4",
                    message: "fine, you?",
                    direction: 'companion'
                }
            ],
            newMessageTextAreaValue: ''
        },
        menuData: {
            bar: [
                {
                    name: "News",
                    to: "/news"
                },
                {
                    name: "Dialogs",
                    to: "/dialogs"
                },
                {
                    name: "Profile Info",
                    to: "/profileinfo"
                }
            ]
        }
    },
    _callSubscriber() { },
    dispatch(action) {
        let state = this.getState();
        this._state.dialogsData = dialogsReducer(state.dialogsData, action);
        this._state.profileData = profileReducer(state.profileData, action);
        this._state.menuData = menuReducer(state.menuData, action);
        this._callSubscriber();
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        if (!observer) {
            return;
        }
        this._callSubscriber = observer;
    }
};
export default store