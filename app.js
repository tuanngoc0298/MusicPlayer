/**
 * 1. Render songs => OK
 * 2. Play / Pause / Seek => OK
 * 3. CD rotate => OK
 * 4. Next / Previous => OK
 * 5. Show / Hide Playlist => OK
 * 6. Random => OK
 * 7. Next / Repeat when ended => OK
 * 8. Active song => OK
 * 9. Scroll active song into  => OK
 * 10. Play song when click => OK
 * 11. Volumn => OK
 * 12. Change tooltip => OK
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playerMusic = $(".player-music");
const listSongIcon = $(".list-music-icon");
const playListSongs = $(".playlist_songs");
const playListWrapper = $(".playlist-wrapper");
const playList = $(".playlist");
const closeIcon = $(".playlist_close-icon");
const songName = $(".song__name");
const songAuthor = $(".song__author");
const audio = $(".audio");
const btnPlay = $(".btn-play");
const cdImg = $(".cd-img");
const btnNext = $(".btn-next");
const btnPrev = $(".btn-prev");

const progressBar = $(".progress-bar");
const progressValue = $(".progress-bar__value");
const progressBarWrapper = $(".progress-bar-wraaper");

const volumeChange = $(".volume-change");
const volumeBar = $(".volume-change__bar");
const volumeValue = $(".volume-change__value");
const volumeWrapper = $(".volume-change-wrapper");
const volumeIcon = $(".volume-change__icon");

const timeCurrent = $(".progress-time__current");
const timeDuration = $(".progress-time__duration");

const iconFavourite = $(".add-favourite-icon");

const btnRepeat = $(".btn-repeat");
const btnRandom = $(".btn-random");
const apps = {
    previousIndex: 0,
    currentIndex: 0,
    currentVolume: 100,
    isPlaying: false,
    isRepeating: false,
    isRandom: false,
    isHoldProgressBar: false,
    isHoldVolumeChange: false,
    isMute: false,
    songs: [
        {
            name: "Attention",
            author: "Charlie Puth",
            image: "./assets/img/CharliePuth.jpg",
            path: "./assets/music/Attention-CharliePuth-6429177.mp3",
        },
        {
            name: "Hymn For Weekend",
            author: "Cold Play",
            image: "./assets/img/ColdPlay.jpg",
            path: "./assets/music/HymnForTheWeekend-Coldplay-6426703.mp3",
        },
        {
            name: "The Lazy Song",
            author: "Bruno Mars",
            image: "./assets/img/BrunoMars2.jpg",
            path: "./assets/music/TheLazySong-BrunoMars-6435263.mp3",
        },
        {
            name: "Nevada",
            author: "MonsterCat",
            image: "./assets/img/MonsterCat.jpg",
            path: "./assets/music/Nevada-Monstercat-6983746.mp3",
        },
        {
            name: "Numb",
            author: "Linkin Park",
            image: "./assets/img/LinkinPark.jpg",
            path: "./assets/music/Numb-LinkinPark-6441286.mp3",
        },
        {
            name: "Treasure",
            author: "Bruno Mars",
            image: "./assets/img/BrunoMars3.jpg",
            path: "./assets/music/Treasure-BrunoMars-6426948.mp3",
        },
        {
            name: "Pay Phone",
            author: "Maroon 5",
            image: "./assets/img/Maroon5.jpg",
            path: "./assets/music/Payphone-Maroon5_498k.mp3",
        },
        {
            name: "See You Again",
            author: "Charlie Puth",
            image: "./assets/img/CharliePuth3.jpg",
            path: "./assets/music/SeeYouAgainFeatCharliePuth-WizKhalifa-6426109.mp3",
        },
        {
            name: "That Girl",
            author: "Olly Murs",
            image: "./assets/img/OllyMurs.jpg",
            path: "./assets/music/ThatGirl-OllyMurs-6560207.mp3",
        },
        {
            name: "Con Mua Ngang Qua",
            author: "Son Tung",
            image: "./assets/img/SonTung1.jpg",
            path: "./assets/music/ConMuaNgangQua-SonTungMTP-2944936.mp3",
        },
        {
            name: "That's What Like",
            author: "Bruno Mars",
            image: "./assets/img/BrunoMars1.jpg",
            path: "./assets/music/ThatSWhatILike-BrunoMars-6437811.mp3",
        },
        {
            name: "All Falls Down",
            author: "Alan Walker",
            image: "./assets/img/AlanWalker.jpg",
            path: "./assets/music/AllFallsDown-AlanWalkerNoahCyrusDigitalFarmAnimalsJuliander-5817723.mp3",
        },

        {
            name: "Closer",
            author: "Halsey",
            image: "./assets/img/Halsey.jpg",
            path: "./assets/music/Closer-TheChainsmokersHalsey-4419395.mp3",
        },

        {
            name: "Con Mua Ngang Qua 2",
            author: "Son Tung",
            image: "./assets/img/SonTung2.jpg",
            path: "./assets/music/ConMuaNgangQuaPart2-M-TP_3c26j.mp3",
        },
        {
            name: "Monody",
            author: "TheFatRat",
            image: "./assets/img/TheFatRat.jpg",
            path: "./assets/music/Monody-TheFatRatLauraBrehm-4174394.mp3",
        },
        {
            name: "Em Dung Di",
            author: "Son Tung",
            image: "./assets/img/SonTung1.jpg",
            path: "./assets/music/EmDungDi-M-TP_3j3w3.mp3",
        },
        {
            name: "Havana",
            author: "Camila Cabello",
            image: "./assets/img/Camila1.jpg",
            path: "./assets/music/Havana-CamilaCabelloYoungThug-5817730.mp3",
        },
        {
            name: "I Do",
            author: "911",
            image: "./assets/img/911.jpg",
            path: "./assets/music/IDo-911-2757427.mp3",
        },
        {
            name: "Con Mua Ngang Qua 3",
            author: "Son Tung",
            image: "./assets/img/SonTung2.jpg",
            path: "./assets/music/ConMuaNgangQuapart3-MTP-2427879.mp3",
        },
        {
            name: "Never Be Alone",
            author: "TheFatRat",
            image: "./assets/img/TheFatRat.jpg",
            path: "./assets/music/NeverBeAlone-TheFatRat-3770713.mp3",
        },

        {
            name: "Star Sky",
            author: "Two Step From Hell",
            image: "./assets/img/TwoStep.jpg",
            path: "./assets/music/StarSky-TwoStepsFromHell-3897684.mp3",
        },
        {
            name: "Symphony",
            author: "Clean Bandit",
            image: "./assets/img/CleanBanDit.jpg",
            path: "./assets/music/Symphony-CleanBanditZaraLarsson-4822950.mp3",
        },
        {
            name: "Waiting For You",
            author: "MoNo",
            image: "./assets/img/mono.jpg",
            path: "./assets/music/WaitingForYou-MONOOnionn-7733882.mp3",
        },
        {
            name: "Unity",
            author: "TheFatRat",
            image: "./assets/img/TheFatRat.jpg",
            path: "./assets/music/Unity-TheFatRat-3578590.mp3",
        },
        {
            name: "Until You",
            author: "Shayne Warrd",
            image: "./assets/img/ShayNe.jpg",
            path: "./assets/music/UntilYou-ShayneWard-1979790.mp3",
        },
        {
            name: "We Don't Talk Anymore",
            author: "CharliePuth",
            image: "./assets/img/CharliePuth2.jpg",
            path: "./assets/music/WeDonTTalkAnymoreFeatSelenaGomez-CharliePuth-6426101.mp3",
        },
        {
            name: "Lệ Anh Vẫn Rơi",
            author: "Son Tung",
            image: "./assets/img/SonTung1.jpg",
            path: "./assets/music/LeAnhVanRoi.mp3",
        },
    ],
    handleEvent() {
        // Turn off right click hide context menu
        // playerMusic.addEventListener("contextmenu", (e) => {
        //     alert("Fuck you");
        //     e.preventDefault();
        // });
        const _this = this;
        const playListItems = $$(".playlist_item");
        playListItems[this.currentIndex].classList.add("active");
        // Show/Hide listSongs when click icon
        listSongIcon.onclick = () => {
            _this.togglePlayList();
        };
        closeIcon.onclick = () => {
            _this.togglePlayList();
        };

        playListWrapper.onclick = () => {
            _this.togglePlayList();
        };
        playList.onclick = (e) => {
            e.stopPropagation();
        };
        // Add Favourite song
        iconFavourite.onclick = (e) => {
            iconFavourite.classList.toggle("favourite");
        };

        // Handle cd spins / stop
        const cdImgAnimate = cdImg.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000,
            iterations: Infinity,
        });
        cdImgAnimate.pause();
        // When click play song
        btnPlay.onclick = (e) => {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        // When song played
        audio.onplay = () => {
            _this.isPlaying = true;
            btnPlay.classList.add("playing");
            cdImgAnimate.play();
        };

        // When song turn off
        audio.onpause = () => {
            _this.isPlaying = false;
            btnPlay.classList.remove("playing");
            cdImgAnimate.pause();
        };

        // When next song
        btnNext.onclick = () => {
            if (_this.isRandom) {
                _this.randomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
        };

        // When previous song
        btnPrev.onclick = () => {
            if (_this.isRandom) {
                _this.randomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
        };

        // When song finished song
        audio.onended = () => {
            if (_this.isRepeating) {
                _this.loadCurrentSong();
            } else if (_this.isRandom) {
                _this.randomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
        };

        // When the currentTime song change,
        // When the progress song change
        audio.ontimeupdate = () => {
            timeCurrent.innerText = _this.timeFormat(audio.currentTime);
            // Handling if holding the mouse to rewind, progressValue will not run every time the song changes time current but will change according to the position the mouse is holding,
            if (_this.isHoldProgressBar == false) {
                const percentProgress = (audio.currentTime / audio.duration) * 100;
                progressValue.style.width = `${percentProgress}%`;
            }
        };

        // When Click don't hold mouse
        progressBarWrapper.addEventListener("mousedown", (e) => {
            _this.isHoldProgressBar = true;
        });
        // When holding the mouse, progressValue will change according to the position that the mouse points to
        window.addEventListener("mousemove", (e) => {
            if (_this.isHoldProgressBar) {
                const rect = progressBar.getBoundingClientRect();
                const percentProgress = parseFloat(((e.pageX - rect.left) / progressBar.offsetWidth) * 100);

                if (percentProgress >= 0 && percentProgress <= 100) {
                    progressValue.style.width = `${percentProgress}%`;
                } else if (percentProgress < 0) {
                    progressValue.style.width = `1%`;
                } else if (percentProgress > 100) {
                    progressValue.style.width = `99%`;
                }
                playerMusic.classList.add("player-music--hover-progress");
            }
        });
        // When you release the mouse, the time Current will be changed
        window.addEventListener("mouseup", (e) => {
            if (_this.isHoldProgressBar) {
                _this.isHoldProgressBar = false;
                const rect = progressBar.getBoundingClientRect();

                let percentProgress = parseFloat(((e.pageX - rect.left) / progressBar.offsetWidth) * 100);
                if (percentProgress < 0) {
                    percentProgress = 0;
                }
                if (percentProgress > 100) {
                    percentProgress = 100;
                }
                audio.currentTime = (percentProgress / 100) * audio.duration;
                playerMusic.classList.remove("player-music--hover-progress");
            }
        });

        // Active song in playlist
        playListItems.forEach((song, index) => {
            const option = song.querySelector(".playlist_item-options");
            option.onclick = (e) => {
                e.stopPropagation();
            };
            song.addEventListener("click", (e) => {
                // Remove case click on option and currentSong
                if (e.target != option && _this.currentIndex != index) {
                    _this.previousIndex = _this.currentIndex;
                    _this.currentIndex = index;
                    _this.loadCurrentSong();
                    // Do not render because when rendering the variables will be changed, so they will not receive the value
                    _this.activeSong();
                    audio.play();
                }
            });
        });

        // Handle repeat song
        btnRepeat.onclick = (e) => {
            // When Repeat must turn off random
            btnRandom.classList.remove("being-Random");
            _this.isRandom = false;

            _this.isRepeating = !_this.isRepeating;
            btnRepeat.classList.toggle("repeating");
        };

        // Handle random song
        btnRandom.onclick = (e) => {
            // When Random must turn off Repeat
            btnRepeat.classList.remove("repeating");
            _this.isRepeating = false;

            _this.isRandom = !_this.isRandom;
            btnRandom.classList.toggle("being-Random");
        };

        // Handle when change song
        volumeWrapper.addEventListener("mousedown", (e) => {
            _this.isHoldVolumeChange = true;
        });
        window.addEventListener("mousemove", (e) => {
            if (_this.isHoldVolumeChange) {
                const rect = volumeWrapper.getBoundingClientRect();
                var percentVolume = parseFloat(((e.pageX - rect.left) / volumeWrapper.offsetWidth) * 100);
                if (percentVolume >= 0 && percentVolume <= 100) {
                    volumeValue.style.width = `${percentVolume}%`;
                } else if (percentVolume < 0) {
                    percentVolume = 0;
                    volumeValue.style.width = `1%`;
                } else if (percentVolume > 100) {
                    percentVolume = 100;
                    volumeValue.style.width = `99%`;
                }
                _this.currentVolume = percentVolume;
                audio.volume = percentVolume / 100;
                if (audio.volume == 0) {
                    _this.isMute = true;
                } else {
                    _this.isMute = false;
                }
                playerMusic.classList.add("player-music--hover-volume");
            }
        });
        window.addEventListener("mouseup", (e) => {
            if (_this.isHoldVolumeChange) {
                _this.isHoldVolumeChange = false;
                const rect = volumeWrapper.getBoundingClientRect();
                var percentVolume = parseFloat(((e.pageX - rect.left) / volumeWrapper.offsetWidth) * 100);
                if (percentVolume < 0) {
                    percentVolume = 0;
                } else if (percentVolume > 100) {
                    percentVolume = 100;
                }
                _this.currentVolume = percentVolume;
                volumeValue.style.width = `${_this.currentVolume}%`;
                audio.volume = percentVolume / 100;
                playerMusic.classList.remove("player-music--hover-volume");
            }
        });

        volumeIcon.addEventListener("click", (e) => {
            _this.isMute = !_this.isMute;
            volumeChange.classList.toggle("mute");
            if (_this.isMute) {
                audio.volume = 0;
                volumeValue.style.width = `0%`;
            } else {
                volumeValue.style.width = `${_this.currentVolume}%`;
                audio.volume = _this.currentVolume / 100;
            }
        });

        audio.addEventListener("volumechange", (e) => {
            if (_this.isMute) {
                volumeChange.classList.add("mute");
            } else {
                volumeChange.classList.remove("mute");
            }
        });

        // Handle when user Press space and arrow keys
        document.addEventListener("keydown", (e) => {
            if (e.which == 32) {
                btnPlay.click();
            }
            if (e.which == 39) {
                audio.currentTime += 5;
            }
            if (e.which == 37) {
                audio.currentTime -= 5;
            }
        });

        // Handle in Mobile
        // When touch don't hold mouse
        progressBarWrapper.addEventListener("touchstart", (e) => {
            _this.isHoldProgressBar = true;
        });
        // When touch move, progressValue will change according to the position that the mouse points to
        window.addEventListener("touchmove", (e) => {
            if (_this.isHoldProgressBar) {
                const rect = progressBar.getBoundingClientRect();
                for (let i = 0; i < e.changedTouches.length; i++) {
                    const percentProgress = parseFloat(
                        ((e.changedTouches[i].pageX - rect.left) / progressBar.offsetWidth) * 100
                    );

                    if (percentProgress >= 0 && percentProgress <= 100) {
                        progressValue.style.width = `${percentProgress}%`;
                    } else if (percentProgress < 0) {
                        progressValue.style.width = `1%`;
                    } else if (percentProgress > 100) {
                        progressValue.style.width = `99%`;
                    }
                }
            }
        });
        // When you release touch, the time Current will be changed
        window.addEventListener("touchend", (e) => {
            if (_this.isHoldProgressBar) {
                _this.isHoldProgressBar = false;
                const rect = progressBar.getBoundingClientRect();

                let percentProgress = parseFloat(
                    ((e.changedTouches[0].pageX - rect.left) / progressBar.offsetWidth) * 100
                );
                if (percentProgress < 0) {
                    percentProgress = 0;
                }
                if (percentProgress > 100) {
                    percentProgress = 100;
                }
                audio.currentTime = (percentProgress / 100) * audio.duration;
            }
        });

        // Handle when touch change volume
        volumeWrapper.addEventListener("touchstart", (e) => {
            _this.isHoldVolumeChange = true;
        });
        window.addEventListener("touchmove", (e) => {
            if (_this.isHoldVolumeChange) {
                const rect = volumeWrapper.getBoundingClientRect();
                for (let i = 0; i < e.changedTouches.length; i++) {
                    var percentVolume = parseFloat(
                        ((e.changedTouches[i].pageX - rect.left) / volumeWrapper.offsetWidth) * 100
                    );
                    if (percentVolume >= 0 && percentVolume <= 100) {
                        volumeValue.style.width = `${percentVolume}%`;
                    } else if (percentVolume < 0) {
                        percentVolume = 0;
                        volumeValue.style.width = `1%`;
                    } else if (percentVolume > 100) {
                        percentVolume = 100;
                        volumeValue.style.width = `99%`;
                    }
                    _this.currentVolume = percentVolume;
                    audio.volume = percentVolume / 100;
                    if (audio.volume == 0) {
                        _this.isMute = true;
                    } else {
                        _this.isMute = false;
                    }
                }
            }
        });
        window.addEventListener("touchend", (e) => {
            if (_this.isHoldVolumeChange) {
                _this.isHoldVolumeChange = false;
                const rect = volumeWrapper.getBoundingClientRect();
                var percentVolume = parseFloat(
                    ((e.changedTouches[0].pageX - rect.left) / volumeWrapper.offsetWidth) * 100
                );
                if (percentVolume < 0) {
                    percentVolume = 0;
                } else if (percentVolume > 100) {
                    percentVolume = 100;
                }
                _this.currentVolume = percentVolume;
                volumeValue.style.width = `${_this.currentVolume}%`;
                audio.volume = percentVolume / 100;
            }
        });
    },
    // Function add properties
    defineProperties() {
        Object.defineProperty(this, "currentSong", {
            get() {
                return this.songs[this.currentIndex];
            },
        });
    },

    renderListSong() {
        const htmls = this.songs.map((song, index) => {
            return `
                <li class="playlist_item"  data-index = "${index} ">
                    <div class = "playlist_item-img">
                        <img src="${song.image}" alt=""}>
                    </div>
                    <div class="playlist_item-info">
                        <h3 class="playlist_item-name text">${song.name}</h3>
                        <p class="playlist_item-author text">${song.author}</p>
                    </div>

                    <div class='waves-loading'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="playlist_item-options text">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </li>
            `;
        });
        playListSongs.innerHTML = htmls.join("");
    },

    timeFormat(seconds) {
        let minute = Math.floor(seconds / 60);
        let second = Math.floor(seconds % 60);
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        return minute + ":" + second;
    },

    togglePlayList() {
        playListWrapper.classList.toggle("playlist-open");
    },

    loadCurrentSong() {
        songName.innerText = this.currentSong.name;
        songAuthor.innerText = this.currentSong.author;
        cdImg.src = this.currentSong.image;
        audio.src = this.currentSong.path;
        progressValue.style.width = 0;
        // Handle duration time before music played
        audio.onloadedmetadata = () => {
            timeCurrent.innerText = this.timeFormat(audio.currentTime);
            timeDuration.innerText = this.timeFormat(audio.duration);
        };
    },
    nextSong() {
        this.previousIndex = this.currentIndex;
        this.currentIndex++;
        if (this.currentIndex == this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
        this.activeSong();
    },
    prevSong() {
        this.previousIndex = this.currentIndex;
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
        this.activeSong();
    },
    activeSong() {
        const playListItems = $$(".playlist_item");
        const songActive = playListItems[this.currentIndex];
        songActive.classList.add("active");
        this.scrollToActiveSong(songActive);

        playListItems[this.previousIndex].classList.remove("active");
    },
    scrollToActiveSong(songActive) {
        songActive.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    },
    randomSong() {
        const indexRandomSOng = Math.floor(Math.random() * this.songs.length);
        this.previousIndex = this.currentIndex;
        this.currentIndex = indexRandomSOng;
        this.loadCurrentSong();
        this.activeSong();
    },
    start() {
        this.renderListSong();
        this.defineProperties();
        this.handleEvent();
        this.loadCurrentSong();
    },
};

apps.start();
