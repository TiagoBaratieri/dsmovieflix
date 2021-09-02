INSERT INTO tb_user (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);

INSERT INTO tb_genre (name) VALUES ('Ficção científica');
INSERT INTO tb_genre (name) VALUES ('Animação');
INSERT INTO tb_genre (name) VALUES ('Terror');
INSERT INTO tb_genre (name) VALUES ('Ação');

INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/w500_and_h282_face/xbgzPINakUlas2rUMhuDp1AHFdi.jpg','A lenda você conhece. A aventura você ainda precisa imaginar.','Em 1923, um grupo de arqueólogos exploram o egito. Nessa exploração encontram o corpo mumificado de Imhotep. Quando um deles lê o texto do livro de Amon-Dei, acidentalmente traz Imhoptep de volta a vida. Ele ressurge cheio de ódio e só pensa em reencontrar sua amada e destruir todos que cruzem o seu caminho, trazendo consigo as dez pragas do Egito.','A Múmia',1999,4)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/uxcGdDtAykhbVIhSwS37T7eV2Ta.jpg','Assassino a Preço Fixo','Arthur Bispo faz parte de um grupo de elite de assassinos e é um dos melhores no negócio. Bispo exerce as suas funções com precisão, mas quando Harry, seu amigo e mentor, é assassinado, Bishop jura vingança. O filho de Harry quer vingança e tem o desejo de aprender e fazer parte do negócio.','Assassino a Preço Fixo',2011,4)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/w500_and_h282_face/srYya1ZlI97Au4jUYAktDe3avyA.jpg','Uma nova era de maravilhas começa.','Em 1984, Diana Prince entra em conflito com dois inimigos formidáveis, Maxwell Lord e a Mulher-Leopardo, enquanto reencontra misteriosamente com seu antigo interesse amoroso Steve Trevor.','Mulher-Maravilha 1984',2020,4)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/w500_and_h282_face/sFLgXQGrSWxnjmPOpGKPApWNOUH.jpg','463 AD. A nation in need of a legend.','O Rei Arthur volta para casa após lutar contra o Império Romano. Seu filho ilegítimo corrompeu o trono de Camelot e o Rei Arthur deve se reunir com o mago Merlin e os Cavaleiros da Távola Redonda para lutar para recuperar sua coroa.','Arthur e Merlin: Cavaleiros de Camelot',2020,4)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/uIWnlqVAQWkVXyW1mjsrlvoCItt.jpg','Perigo na Montanha','Joe Braven (Jason Momoa) é um madeireiro que mora na fronteira dos EUA com o Canadá. Ele será confrontado por um grupo de traficantes de drogas e fará o que for preciso para proteger sua família.','Perigo na Montanha',2018,4)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/uxcGdDtAykhbVIhSwS37T7eV2Ta.jpg','Assassino a Preço Fixo','Arthur Bispo faz parte de um grupo de elite de assassinos e é um dos melhores no negócio. Bispo exerce as suas funções com precisão, mas quando Harry, seu amigo e mentor, é assassinado, Bishop jura vingança. O filho de Harry quer vingança e tem o desejo de aprender e fazer parte do negócio.','Assassino a Preço Fixo',2011,4)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/3OwaKVZf3A2NdnarqKbwzFEhKir.jpg','Caçadores de Trolls','Arcádia pode parecer uma cidade comum, mas está no centro de linhas mágicas e místicas que a tornam um nexo para muitas batalhas entre criaturas de outro mundo, incluindo trolls, alienígenas e magos. Agora, vários heróis se unirão em uma aventura épica onde devem lutar contra a Ordem Arcana pelo controle da magia que os une.','A Ascensão dos Titãs ',2021,2)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/nGaqRrdSfRTKvXgfK4FG7Thhb0x.jpg','Colheita ','A viagem de um médico com sua mulher é interrompida quando o casal encontra o corpo de um garoto na estrada. Eles tentam chamar a polícia e acabam em um vilarejo onde jovens adoradores de um culto macabro realizam sacrifícios humanos.','Colheita Maldita',1984,3)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/2L9YmS44N1OPJCtWEJdga4M1ykd.jpg','O Massacre','Em 1973, a polícia texana deu como encerrado o caso de um terrível massacre de 33 pessoas provocado por um homem que usava uma máscara feita de pele humana. Nos anos que se seguiram os policiais foram acusados de fazer uma péssima investigação e de terem matado o cara errado. Só que dessa vez, o único sobrevivente do massacre vai contar em detalhes o que realmente aconteceu na deserta estrada do Texas, quando ele e mais 4 amigos estavam indo visitar o seu avô.','O Massacre da Serra Elétrica ',1974,3)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg','Luca ','Ambientado na bela Riviera Italiana, este longa-metragem da Disney e da Pixar acompanha as aventuras do garoto Luca durante um verão inesquecível repleto de macarronadas, gelatos e passeios incríveis de motoneta ao lado de seu novo amigo Alberto. Mas um grande segredo ameaça colocar fim à diversão: abaixo da superfície da água, eles são monstros marinhos!','Luca',2021,2)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/1i1N0AVRb54H6ZFPDTwbo9MLxSF.jpg','WandaVision','Wanda Maximoff e Visão, um casal de super-heróis com uma vida perfeita, que começa a suspeitar que nem tudo é o que parece.','WandaVision',2021,1)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/adZ9ldSlkGfLfsHNbh37ZThCcgU.jpg','Os Simpsons','A família Simpsons mora na cidade de Springfield, uma cidade americana como qualquer outra. Homer trabalha como inspetor de segurança numa usina de energia nuclear. Marge tenta manter a paz em sua família. Bart é um travesso garoto de 10 anos. Lisa, 8, é a inteligente da família, que adora tocar saxofone e é vegetariana. E a pequena Maggie conquista todos enquanto não larga sua chupeta. E a série tem um rico, e muitas vezes estranho, universo de personagens que também habitam Springfield. Com roteiros inteligentes, humor subversivo e divertidamente genial, a série faz piadas de si mesma e de todo mundo que aparecer em seu caminho.','Os Simpsons',1989,2)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/eO8h4fwdjWodPr3awVr5wqMN3Ut.jpg','Falcão','Após os eventos de "Vingadores: Ultimato", Sam Wilson/Falcão e Bucky Barnes/Soldado Invernal se unem em uma aventura que testa suas habilidades - e a paciência.','Falcão e o Soldado Invernal',2021,1)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/6zfLk86Hu5qjLiRs1Y7cGl1DtRm.jpg','Código','Quando um dos suspeitos do assassinato de sua mulher e filha é solto, Clyde quer vingança e decide fazer justiça com as próprias mãos. Clyde é preso e dentro da cadeia organiza uma matança para desmascarar o sistema judicial corrupto.','Código de Conduta',2009,4)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/rlNnwObbMu5G2FaOUlacnUIdIIA.jpg','Miraculous World','Logo que chega a Xangai para visitar um tio, Ladybug tem a bolsa roubada com Tikki dentro. Na tentativa de recuperá-lo, ela descobre que Gabriel Agreste também está na cidade em busca de um poderoso artefato.','Miraculous World: Xangai, a Lenda de Ladydragon',2021,2)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg','Game of Thrones','Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.','Game of Thrones ',2011,1)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES('https://www.themoviedb.org/t/p/original/nVKRspU9SQEs2gNrms8cDKsI4vx.jpg','A Guerra do Amanhã','Em 2051, a humanidade está perdendo uma guerra global contra uma espécie mortal de alienígenas. Para garantir a sobrevivência dos humanos, soldados e civis do presente são transportados para o futuro e se juntam à luta, entre eles Dan Forester, um pai de família determinado a salvar o mundo para sua filha.','A Guerra do Amanhã ',2021,4)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w533_and_h300_bestv2/pjLdH5VIKirwVUIZ0iDisXoRGo4.jpg', '', 'Em um distante futuro, um pequeno robô coletor de lixo embarca em uma jornada espacial que acabará por decidir o destino da humanidade.', 'Wall-e', 2008, 2);
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dJrYUXjgYAD95Ho67t7Utdqv8At.jpg', 'Programado Para Matar', 'John Rambo é um veterano de guerra atormentado pelas lembranças do Vietnã. Numa viagem à procura de um colega do exército, passa por uma cidadezinha cujo xerife o toma por vagabundo, e acaba detido. Lá, a agressividade dos policiais traz à tona todos os seus traumas, mas também toda sua habilidade de guerra. Rambo foge, então, para uma floresta vizinha, e dá início a uma caçada explosiva, em que será preciso toda uma força policial para combater um só homem.', 'Rambo', 1982, 4);
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w533_and_h300_bestv2/x2UmaR2tUqIzD6aHa0tIxrqYjOc.jpg', '', 'Um grupo de adolescentes tem pesadelos horríveis, onde são atacados por um homem deformado com garras de aço. Ele apenas aparece durante o sono e, para escapar, é preciso acordar. Os crimes vão ocorrendo seguidamente, até que se descobre que o ser misterioso é na verdade Freddy Krueger (Robert Englund), um homem que molestou crianças na rua Elm e que foi queimado vivo pela vizinhança. Agora Krueger pode retornar para se vingar daqueles que o mataram, através do sono.', 'A Hora do Pesadelo', 1984, 3);
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w533_and_h300_bestv2/aCsggxaOJo9tLrt297Bc5cT3nCY.jpg', 'O Filme', 'Um fenômeno alienígena de poder e tamanho descomunal se aproxima da Terra, destruindo tudo em seu caminho. A única nave que pode enfrentar esta força letal que ameaça a Terra é a U.S.S. Enterprise. O lendário comandante James T. Kirk (William Shatner) é convocado para a missão, mas um perigo não previsto pode destruir a U.S.S. Enterprise e toda a sua tripulação.', 'Jornada nas estrelas', 1980, 1);
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w533_and_h300_bestv2/rxdSNzq3hofvyakEgKt2zfTN5tJ.jpg', 'Episódio I - A Ameaça Fantasma', 'Enquanto resgatam a Rainha Amidala, governante de um planeta pacífico invadido por forças ameaçadoras, os Cavaleiros Jedi Obi-Wan Kenobi e Qui-Gon Jinn descobrem Anakin Skywalker, uma criança prodígio de 9 anos excepcionalmente poderosa na Força.', 'Star Wars', 1999, 1);
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w500_and_h282_face/umrpNeJooAyfvgPuOutNQHZdJ2p.jpg','There"s no running from family.', 'A story about the complex connection with a brother who is based in Mexico, meant to be a metaphor of the relationship between neighboring countries America and Mexico.','Half Brothers',2020,1)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w500_and_h282_face/wylOzTrkqpuggTEmHRgD31r5uG5.jpg', 'O Jogo do Século','With the help of Bugs Bunny and the Looney Tunes, NBA superstar LeBron James must reshis missing son Bronny by navigating through movies in the Warner Bros. catalogue as they challenge against the villainous Al-G"s plot to win a basketball game against his team of foes, which will be seen by the entire world.','Space Jam: Um Novo Legado',2021,2)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w500_and_h282_face/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg','Is all this living really worth dying for?','Joe Gardner é um professor de música de ensino fundamental desanimado por não conseguir alcançar seu som de tocar no lendário clube de jazz The Blue Note, em Nova York. Quando um acidente o transporta para fora do seu corpo, fazendo com que ele exista em outra realidade na forma de sua alma, ele se vê forçado a embarcar em uma aventura ao lado da alma de uma criança que ainda está aprendendo sobre si, para aprender o que é necessário para retomar sua vida.','Soul',2020,1)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w220_and_h330_face/qNDHPwVi1Rf6E7F5vdjmTt9iPLb.jpg','One party... can change your life','Duffy, um ex "rei do campus" tem a última oportunidade de uma noitada antes do seu casamento. Ele terá que sobreviver à massagistas asiáticas, ex namoradas sensuais, campeonato de strip beer pong, travestis peitudas e tentações saídas direto de filmes pornôs.','A Festa',2013,1)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w220_and_h330_face/fIJlWkVfs3cNKv5DGhDGpGOiCSC.jpg','The life of the man who transformed death into art.','Lançado inicialmente comio uma minissérie, Aborda a vida do cineasta José Mojica Marins e seu famoso personagem, o Zé do Caixão. De forma paralela, a vida pessoal e as grandes obras do artista são retratadas.','Zé do Caixão',2015,3)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w500_and_h282_face/5EL6iDKz6C9YbvUHJQT77M2SksL.jpg', 'O Rei do Brasil','Cinebiografia de Assis Chateaubriand, também conhecido como Chatô. Primeiro magnata das comunicações do Brasil, destacando-se entre o final dos anos 1930 e início dos anos 1960, tinha uma próxima e polêmica relação com o ex-presidente Getúlio Vargas. Baseado em livro homônimo de Fernando Morais.','Chatô',2015,1)
INSERT INTO tb_movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w500_and_h282_face/iySBMiD799KEYQY2jcbdvUQCk42.jpg','A lovers" story','Em meados dos anos 60, em Praga, Tomas conhece a inocente Tereza e os dois se apaixonam. Porém, o médico também mantém relações com Sabina, uma mulher refinada. Mas a vida deste triângulo amoroso será afetada pelos acontecimentos deste período.','A Insustentável Leveza do Ser',1988,3)


INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 1, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('otimo filme.', 3, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Adorei.', 4, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme.', 5, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('O melhor.', 7, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 10, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 12, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 15, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 18, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 13, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 9, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 5, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 8, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 2, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 6, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 14,2 );
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 16, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Incrível esse filme, incrível a história de produção.', 17, 2);