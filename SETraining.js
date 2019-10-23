var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"Knot"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"raise":[{"temp=":"x"},"ev",{"VAR?":"x"},1,"+","/ev",{"temp=":"x","re":true},{"#f":1}],"Knot":[[{"#":"SocialEngrg.png"},"^SOCIAL ENGINEERING: The clever manipulation of the natural human tendency to trust.","\n","ev","str","^Begin Lectures","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^(Clashing noises from a rather upset crowd)","\n","^???: May I have your attention please. Good evening ladies and gentlemen. I ask that we stay calm.","\n","^It is to my greatest displeasure that a murder has occurred within the premises. Duke Edgaras has been found dead in the study room and one of you, the guests killed him. I would ask that nobody leaves the premises until the killer is caught.","\n","^Duke Nero: and who might you be.","\n","^???: ooh how rude of me. I am Detective Tobi. A pleasure to meet you all.","\n",["ev","str","^Investigation Begins","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Detective Tobi: Constantine please make sure they are no disturbances.","\n","^Constantine: but sir, we can interrogate everyone. they are in the hundreds sir.","\n","^Detective Tobi: you are right Constantine. Follow me Constantine, lets go investigate the crime scene.","\n","^Constantine: Yes sir.","\n",{"->":"Knot.0.g-0"},{"#f":5}]}],{"#f":5}],"g-0":["^Detective Tobi: Now where do i start.","\n",{"#":"IMAGE: studyroom.jpg"},{"*":".^.c-1","flg":24},{"c-1":[{"->":"Knot.investigate"},"\n",{"#f":5}],"#f":5}]}],{"make_observation":[[["ev",{"^->":"Knot.make_observation.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^'Observe body'",{"->":"$r","var":true},null]}],["ev",{"^->":"Knot.make_observation.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^'Observe lips'",{"->":"$r","var":true},null]}],["ev",{"^->":"Knot.make_observation.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^'Observe clothing'",{"->":"$r","var":true},null]}],"ev","str","^Search the study room.","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["ev",{"^->":"Knot.make_observation.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.observebody"},{"#f":5}],"c-1":["ev",{"^->":"Knot.make_observation.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.observelips"},{"#f":5}],"c-2":["ev",{"^->":"Knot.make_observation.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.observeclothing"},{"#f":5}],"c-3":["\n",{"->":"Knot.studyroom"},{"#f":5}]}],{"#f":1}],"investigate":[["ev","str","^Investigate the duke's body.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Search the study room.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",{"^var":"intel","ci":-1},{"f()":"raise"},"pop","/ev","\n",{"->":"Knot.dukesbody"},{"#f":5}],"c-1":["\n",{"->":"Knot.studyroom"},{"#f":5}]}],{"#f":1}],"dukesbody":[[["^Detective Tobi: The body is still warm, so the murder happened recently.","\n",["^Constantine: Sir, can i ask why you beleive this is a murder.","\n",["^Detective Tobi: Duke Edgaras is one of the wealthiest men in Gaia, why would he kill himself.","\n",["^Constantine: I heard from a bloke working in his mansion that the duke had been leaning close to the bottle for a while now and been crying for hours at night.","\n",["^Detective Tobi: Hmmmm, but why would you believe anything from someone you call a bloke.","\n",["^Constantine: Uh... (looks away embarrassingly)","\n","ev",{"^var":"intel","ci":-1},{"f()":"raise"},"pop","/ev","\n",{"->":"Knot.make_observation"},{"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"observelips":[[["^The Detective moves closer to the duke's body, leaning a bit forward to observe the lips.","\n",["^Detective Tobi: Lips are as dry as a cactus.","\n",["^Constantine: Really odd one sir, considering the amount of drinks that have been made available at the party.","\n",["^Detective Tobi: and who supplied the drinks for this party Sergent.","\n",["^Constantine: The Viceroy of the grape field, Duke Pierre.","\n",["^Detective Tobi: Interesting.","\n","ev",{"^var":"intel","ci":-1},{"f()":"raise"},"pop","/ev","\n",{"->":"Knot.make_observation"},{"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"observebody":[[["^Detective Tobi observes the duke's body lying on the seat. Caught by the attention of the shiny jewellry on the duke's hand, he proceeds to come in contact with the duke's hands.","\n",["^Detective Tobi: Constantine, how warm do you think this room is?","\n",["^Constantine: It's a bit chilly tonight sir and with the fire place currently lit in this room Sir, I'd say it's the perfect type of warm to have some company around, if you know what I mean Sir.","\n",["^Detective Tobi: No I don't Sergent. (sternly eyes the Sergent)","\n",["^Constantine: Sorry Sir. (bows his head down)","\n",["^Detective Tobi: (takes in a deep breath and breathes out) His palms are sweaty and if I am right (places his hand behind the duke's neck), the back of his neck would be also. (takes his hand of the duke's neck and rubs his finger tips against each other). Hmmm, Interesting.","\n","ev",{"^var":"intel","ci":-1},{"f()":"raise"},"pop","/ev","\n",{"->":"Knot.make_observation"},{"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"observeclothing":[[["^Constantine: Now that is what I call a suit. Hey Detective, when do you think I could get a raise.","\n",["^Detective Tobi: Why this sudden question Sergent.","\n",["^Constantine: I need a new suit to impress the lads and ladies.","\n",["^Detective Tobi: You know what, after the investigation you can have the duke's current suit. (smiles)","\n",["^Constantine: But Sir, that's evidence, they won't allow me ... wait a minute, you are being sarcastic again sir.","\n",["^Detective Tobi: Of course not, Sergent (smiles mischievously). Now back to the inves.... (eyes squint a little and focus on a white object barley sticking out of the inner parts of the jacket.).","\n",["^Constantine: Hmmmm Investigation Sir.","\n",["^Detective Tobi: What do we have here. (places his hand into the jacket and btings out a white piece of paper)","\n",["^Constantine: What could that be Sir.","\n",["^Detective Tobi: It's a document stating that all of the duke's assets would be sold.","\n",["^Constantine: Why would he do that.","\n",["^Detective Tobi: By the looks the deal has not gone through yet but still what would drive him to do that.","\n","ev",{"^var":"intel","ci":-1},{"f()":"raise"},"pop","/ev","\n",{"->":"Knot.make_observation"},{"#f":5,"#n":"g-11"}],{"#f":5,"#n":"g-10"}],{"#f":5,"#n":"g-9"}],{"#f":5,"#n":"g-8"}],{"#f":5,"#n":"g-7"}],{"#f":5,"#n":"g-6"}],{"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"studyroom":[[["^Detective Tobi: Let's take a look around shall we.","\n",["^The Detective walks around the room while also paying attention to every corner of the room.","\n",["^Constantine: (picks up a cup of wine from the table) I am seriously perched.","\n",["^Detective Tobi: What in God's name are you doing Sergent.","\n",["^Constantine: Sir?","\n",["^Detective Tobi: You are on duty Sergent.","\n",["^Constantine: It's just a cup of wine to help clear the throat Sir.","\n",["^Detective Tobi: (gives the sergent a stern look).","\n",["^Constantine: All right Sir. (slugglishly drops the cup of win back on the table).","\n",["^Detective Tobi: Compose yourself Sergent.","\n",["^Constantine: Yes Sir. (clumsly throws some books on the floor while trying to salute). Sorry Sir. (quickly tries to pick up the books when a piece of paper drops on the floor)","\n",["^Detective Tobi: Hold on a minute, what is that.","\n",["^Constantine: It's the picture of  a lady sir.","\n",["^Detective Tobi: and who might she be.","\n",["^Constantine: There is something written at the bak sir.","\n",["^Detective Tobi: (flipping the image around and reading out) 'To my dearest, love you always, see you soon'.","\n",["^Constantine: but that is not his wife Sir.","\n",["^Detective Tobi: (sigh) this is turning out to be a bit complex for my taste.","\n",["ev",{"^->":"Knot.studyroom.0.g-0.g-1.g-2.g-3.g-4.g-5.g-6.g-7.g-8.g-9.g-10.g-11.g-12.g-13.g-14.g-15.g-16.g-17.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^'Investigate the duke's body.'",{"->":"$r","var":true},null]}],["ev",{"^->":"Knot.studyroom.0.g-0.g-1.g-2.g-3.g-4.g-5.g-6.g-7.g-8.g-9.g-10.g-11.g-12.g-13.g-14.g-15.g-16.g-17.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^'Announce Suspects'",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Knot.studyroom.0.g-0.g-1.g-2.g-3.g-4.g-5.g-6.g-7.g-8.g-9.g-10.g-11.g-12.g-13.g-14.g-15.g-16.g-17.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.dukesbody"},{"#f":5}],"c-1":["ev",{"^->":"Knot.studyroom.0.g-0.g-1.g-2.g-3.g-4.g-5.g-6.g-7.g-8.g-9.g-10.g-11.g-12.g-13.g-14.g-15.g-16.g-17.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.suspects"},{"#f":5}],"#f":5,"#n":"g-17"}],{"#f":5,"#n":"g-16"}],{"#f":5,"#n":"g-15"}],{"#f":5,"#n":"g-14"}],{"#f":5,"#n":"g-13"}],{"#f":5,"#n":"g-12"}],{"#f":5,"#n":"g-11"}],{"#f":5,"#n":"g-10"}],{"#f":5,"#n":"g-9"}],{"#f":5,"#n":"g-8"}],{"#f":5,"#n":"g-7"}],{"#f":5,"#n":"g-6"}],{"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"suspects":[[["^Detective Tobi: I guess i have my suspects now.","\n",["^Constantine: and who might they be Sir.","\n",["^Detective Tobi: the Wife, the Viceroy, and the business partner.","\n",["^Constantine: What a list Sir. What next Sir.","\n",["^Detective Tobi: I will interrogate them one after the other, send the rest home.","\n",["^Constantine: Who do you want to interrogate first Sir.","\n",["^Detective Tobi: Let's see:","\n",{"->":"Knot.interrogatesuspects"},{"#f":5,"#n":"g-6"}],{"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"interrogatesuspects":[[["ev",{"^->":"Knot.interrogatesuspects.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Wife ",{"->":"$r","var":true},null]}],["ev",{"^->":"Knot.interrogatesuspects.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Viceroy",{"->":"$r","var":true},null]}],["ev",{"^->":"Knot.interrogatesuspects.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Business Parnter",{"->":"$r","var":true},null]}],["ev",{"^->":"Knot.interrogatesuspects.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Announce killer",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Knot.interrogatesuspects.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.wife"},{"#f":5}],"c-1":["ev",{"^->":"Knot.interrogatesuspects.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.viceroyinterrogate"},{"#f":5}],"c-2":["ev",{"^->":"Knot.interrogatesuspects.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.businterogate"},{"#f":5}],"c-3":["ev",{"^->":"Knot.interrogatesuspects.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.choosekiller"},{"#f":5}]}],{"#f":1}],"wife":[[["^Detective Tobi: Welcome Mam. I am truely sorry for your loss.","\n",["^Wife: Thank you Detective but what is all this about.","\n",["^Detective Tobi: I just have a few questions to aks. I hope you would be ok with this.","\n",["^Wife: Argh. Let's just get this over with.","\n",{"->":"Knot.wifeinterrogate"},{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"wifeinterrogate":[["ev","str","^Ask about marriage","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ask about Rumors","/str","/ev",{"*":".^.c-1","flg":20},["ev",{"^->":"Knot.wifeinterrogate.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Interrogate Others.",{"->":"$r","var":true},null]}],{"c-0":["\n",{"->":"Knot.askmarraige"},{"#f":5}],"c-1":["\n",{"->":"Knot.askrumors"},{"#f":5}],"c-2":["ev",{"^->":"Knot.wifeinterrogate.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.interrogatesuspects"},{"#f":5}]}],{"#f":1}],"askmarraige":[[["^Detective Tobi: Did you have any issues in your Marriage Mam?","\n",["^Wife: Whose marriage is not rocky. We had issues, yes but we always resolved it and moved forward.","\n",["^Detective Tobi: True, although I found this picture in the study room, who might that be Mam?","\n",["^Wife: My husband had his distractions, but as long as he did not bring in a child, I overlooked them.","\n",["^Detective Tobi: Hmmm. Some would also call your husband a tyrant, what are your thoughts on that.","\n",["^Wife: Now Detective, don't beleive all you hear.","\n","ev",{"^var":"intel","ci":-1},{"f()":"raise"},"pop","/ev","\n",[{"*":".^.c-0","flg":24},{"c-0":[{"->":"Knot.wifeinterrogate"},"\n",{"#f":5}]}],{"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"askrumors":[[["^Detective Tobi: Rumors have it that your husband was crying at night, how thru was that Mam?","\n",["^Wife: Hmmmm, I never took notice. I have been away on a business trip.","\n",["^Detective Tobi: Hmmm, ok.","\n",["^As you interrogate her, you notice that her gaze turns a bit to a picture of the Duke and his business partner","\n",[{"*":".^.c-0","flg":24},{"c-0":[{"->":"Knot.wifeinterrogate"},"\n",{"#f":5}]}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"viceroyinterrogate":[["ev","str","^Ask about wine","/str","/ev",{"*":".^.c-0","flg":20},["ev",{"^->":"Knot.viceroyinterrogate.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Interrogate Others.",{"->":"$r","var":true},null]}],{"c-0":["\n",{"->":"Knot.wineinter"},{"#f":5}],"c-1":["ev",{"^->":"Knot.viceroyinterrogate.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.interrogatesuspects"},{"#f":5}]}],{"#f":1}],"wineinter":[[["^Detective Tobi: It must always be an honor for you to supply the drinks during this event.","\n",["^Viceroy: It's a good thing I beleive.","\n",["^Detective Tobi: But I am a bit concerned about you Viceroy. It's in the news that the Duke would soon acquire your properties, yet you honor the event.","\n",["^Viceroy: We already came to an understanding about this until this unfortunate event.","\n",["^Detective Tobi: An unfortunate event that works for you.","\n",["^Viceroy: Are you insinuating something Detective?","\n",["^Detective Tobi: oooh nothing. I was just stating that since the Duke is dead, you dont have to lose all your property. I would just say you are lucky and that luck did not extend to the Duke.","\n","ev",{"^var":"intel","ci":-1},{"f()":"raise"},"pop","/ev","\n",[{"*":".^.c-0","flg":24},{"c-0":[{"->":"Knot.viceroyinterrogate"},"\n",{"#f":5}]}],{"#f":5,"#n":"g-6"}],{"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"businterogate":[["ev","str","^Ask about business","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Go for bathroom break","/str","/ev",{"*":".^.c-1","flg":20},["ev",{"^->":"Knot.businterogate.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Interrogate Others.",{"->":"$r","var":true},null]}],{"c-0":["\n",{"->":"Knot.businter"},{"#f":5}],"c-1":["\n",{"->":"Knot.wifeinter"},{"#f":5}],"c-2":["ev",{"^->":"Knot.businterogate.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.interrogatesuspects"},{"#f":5}]}],{"#f":1}],"businter":[[["^Detective Tobi: Good evening sir, so sorry about the news of your business partner.","\n",["^Business Partner: It truely is a sad news.","\n",["^Detective Tobi: To others yes, but not sure about you. The story about you and the Duke, how both of you started together and he decided to claim it all for himself and give you the crumbs. Revenge would have been sweet for you.","\n",["^Business Partner: sigh. Detective this is how business works. The smart ones win. It's that simple.","\n",["^Detective Tobi: so you are not bothered with the crumbs.","\n",["^Business Partner: Truthfully speaking, no. It's all vanity.","\n",["^Detective Tobi: Then what is gold to you.","\n",["^Business Partner: (stares at the table). Love","\n",[{"*":".^.c-0","flg":24},{"c-0":[{"->":"Knot.businterogate"},"\n",{"#f":5}]}],{"#f":5,"#n":"g-7"}],{"#f":5,"#n":"g-6"}],{"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"wifeinter":[[["^'The Detective tries to take a bathroom break and while going back to the interrogate room notices an unsettled business partner talking to the wife'","\n","ev",{"^var":"intel","ci":-1},{"f()":"raise"},"pop","/ev","\n",[{"*":".^.c-0","flg":24},{"c-0":[{"->":"Knot.businterogate"},"\n",{"#f":5}]}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"choosekiller":[[{"#":"IMAGE: killer.jpg"},["^Detective Tobi: With all theses, the killer must be:","\n",["ev",{"^->":"Knot.choosekiller.0.g-0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Wife",{"->":"$r","var":true},null]}],["ev",{"^->":"Knot.choosekiller.0.g-0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Viceroy",{"->":"$r","var":true},null]}],["ev",{"^->":"Knot.choosekiller.0.g-0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^business partner",{"->":"$r","var":true},null]}],"ev","str","^all of them","/str",{"VAR?":"intel"},5,">=","/ev",{"*":".^.c-3","flg":21},{"c-0":["ev",{"^->":"Knot.choosekiller.0.g-0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.wifearrest"},{"#f":5}],"c-1":["ev",{"^->":"Knot.choosekiller.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.vicarrest"},{"#f":5}],"c-2":["ev",{"^->":"Knot.choosekiller.0.g-0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Knot.busarrest"},{"#f":5}],"c-3":["^ all of them","\n",{"->":"Knot.arrestornot"},{"#f":5}],"#f":5,"#n":"g-0"}],null],{"#f":1}],"wifearrest":[[["^'You arrest the wife based on the fact that she was jealous and was tired of the Duke cheaitng. A good motive but has Justice really been served?'","\n","done",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"vicarrest":[[["^'You arrest the Viceroy because you believe that he was not happy about the Duke claiming his lands. A good motive but has Justice really been served?'","\n","done",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"busarrest":[[["^'You arrest the business partner because you believe that he was not happy with what the Duke to him and wanted revenge. A good motive but has Justice really been served?'","\n","done",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"arrestornot":[[["^Detective Tobi: The killer was not just one of you but you all. The Duke was not a good character, treating you all badly and revenge is understandable. He cheated on you, his wife and also beat you when he belives you are out of line but still you are not the master mind of this.","\n",["ev",{"^->":"Knot.arrestornot.0.g-0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Viceroy",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Knot.arrestornot.0.g-0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^Detective Tobi: Viceroy, he was about to claim your land and you were concerned about not just your family but your employers. He has always cheated you out of what you own and if he had taken your land, a lot of people would be out on the street but still you are not the master mind of this.","\n",["ev",{"^->":"Knot.arrestornot.0.g-1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Business Partner",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"Knot.arrestornot.0.g-1.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^Detective Tobi: Business Partner, now you are the master mind here. I understand that you have been at the recieving end of the Duke but you did not kil him because of that. You killed him because he were in love with the wife as she is also in love with you and ever bruise she got mad you mad and so you planned. You got a poison and with the help of the Viceroy laced his drink and gave it to his wife to serve him.","\n",["^Business Partner: Now that you know that the man was a tyrant, would you still arrest us.","\n",["^Detective Tobi: In my hand, I hold a deed. The Duke was going to change, leave everything he owned and leave. He was going to give you everything and divorce his Wife.","\n",["^Business Partner: WHAT. How is that possible","\n",["^Detective Tobi: You see, he loved a certain lady. The lady in this picture From the news last week there was a fire at a store and she was one of the victims and that took a toll on him and he reflected a lot on himself. Nothing mattered to him and he just wanted to commit suicide, hence the see you soon at the back of the picture. Hmmm but as a human i understand you all.","\n","ev","str","^Arrest Them","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Let them go","/str","/ev",{"*":".^.c-3","flg":20},{"c-2":["\n",{"->":"Knot.arrestthem"},{"#f":5}],"c-3":["\n",{"->":"Knot.letthemgo"},{"#f":5}],"#f":5,"#n":"g-6"}],{"#f":5,"#n":"g-5"}],{"#f":5,"#n":"g-4"}],{"#f":5,"#n":"g-3"}],{"#f":5}]}],{"#f":1}],"arrestthem":[[["^'As a human, you understand their pain but you are a servant to Justice. You arrest them all'","\n",[{"*":".^.c-0","flg":24},{"c-0":["done","\n",{"#f":5}]}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"letthemgo":[[["^'As a human, you understand their pain and let them go'","\n",[{"*":".^.c-0","flg":24},{"c-0":["done","\n","done",{"#f":5}]}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"#f":1}],"global decl":["ev",0,{"VAR=":"intel"},"/ev","end",null],"#f":1}],"listDefs":{}};