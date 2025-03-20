/* JavaScript */
/* https://www.degraeve.com/reference/urlencoding.php */
// Variables
var time = ['desayunar', 'tentempié', 'almorzar', 'merendar', 'cenar'];
var ways = ['cocer'    , 'freír'    , 'hornear' , 'asar'    , 'guisar', 'sofreír', 'vaporizar', 'grillar', 'saltear', 'estofar'];

// Nombre Mes
var name_month = Array.from({length: 12}, (_, i) => (new Intl.DateTimeFormat(userLanguage, {month: 'long' }).format(new Date(0, i))).capitalize());
// Nombre Día Semana
var name_week  = Array.from({length:  7}, (_, i) => (new Intl.DateTimeFormat(userLanguage, {weekday: 'long' }).format((new Date()).addDays(0, i + 1))).capitalize());

var k_id       = '';
var ka         = {html: true, rand: true, k_flatware : {0: [], 1: [], 2: [], 3: [], 4: []}}
var k_flatware = {0: [], 1: [], 2: [], 3: [], 4: []};
/*
    Ingredientes
        Frutas
        Cereales & Tuberculos
        Verduras & Hortalizas
        Legumbres
        Carne & Pescado & Huevo
        Leche & Derivados Lacteos
        Semillas & Frutos Secos
*/
var ingredients = [
    {type: 'fruit'     , name: 'manzana'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0, 1, 2, 3, 4], nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'pera'           , months: [6, 7, 8, 9, 10, 11, 0, 1]            , times: [0, 1, 2, 3, 4], nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'naranja'        , months: [9, 10, 11, 0, 1, 2, 3, 4]            , times: [0, 1, 2, 3]   , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'mandarina'      , months: [10, 11, 0, 1, 2]                     , times: [1, 3]         , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'limón'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'plátano'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0, 1, 2, 3]   , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'fresa'          , months: [2, 3, 4, 5]                          , times: [0, 1, 3, 4]   , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'cereza'         , months: [4, 5, 6]                             , times: [1]            , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'melocotón'      , months: [4, 5, 6, 7, 8]                       , times: [4]            , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'albaricoque'    , months: [4, 5, 6]                             , times: [0, 1, 2, 3, 4], nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'nectarina'      , months: [5, 6, 7]                             , times: [0, 1, 2, 3, 4], nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'ciruela'        , months: [5, 6, 7, 8]                          , times: [4]            , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'uva'            , months: [7, 8, 9, 10]                         , times: [1, 2, 3]      , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'kiwi'           , months: [9, 10, 11, 0, 1, 2, 3, 4]            , times: [0, 1, 2, 3, 4], nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'granada'        , months: [9, 10, 11, 0]                        , times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'mango'          , months: [4, 5, 6, 7, 8]                       , times: [0, 2]         , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'papaya'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'piña'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0, 1, 2]      , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'sandía'         , months: [5, 6, 7, 8]                          , times: [2, 3]         , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'melón'          , months: [5, 6, 7, 8]                          , times: [2, 4]         , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'higo'           , months: [6, 7, 8]                             , times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'coco'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'frambuesa'      , months: [5, 6, 7, 8, 9]                       , times: [1]            , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'mora'           , months: [6, 7, 8]                             , times: [1]            , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'grosella'       , months: [5, 6, 7]                             , times: [1]            , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'arándano'       , months: [5, 6, 7, 8]                          , times: [1, 3]         , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'guayaba'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'chirimoya'      , months: [9, 10, 11, 0, 1, 2, 3]               , times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'lichi'          , months: [4, 5, 6, 7]                          , times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'carambola'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'maracuyá'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'durazno'        , months: [5, 6, 7, 8]                          , times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'pitahaya'       , months: [5, 6, 7, 8, 9, 10]                   , times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'tamarindo'      , months: [0, 1, 2, 3, 4, 5]                    , times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'membrillo'      , months: [8, 9, 10]                            , times: [2, 3, 4]      , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'pomelo'         , months: [9, 10, 11, 0, 1, 2]                  , times: [0, 1, 2, 3, 4], nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'aguacate'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [4]            , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'zapote'         , months: [1, 2, 3, 4]                          , times: []             , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'caqui'          , months: [10, 11, 12, 0, 1]                    , times: [1, 2, 4]      , nweek: 35, uweek: 0, buy: 0},
    {type: 'fruit'     , name: 'caimito'        , months: [1, 2, 3]                             , times: []             , nweek: 35, uweek: 0, buy: 0},

    {type: 'cereal'    , name: 'avena'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0]            , nweek:  7, uweek: 0, buy: 0},
    {type: 'cereal'    , name: 'maíz'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  0, uweek: 0, buy: 0},
    {type: 'cereal'    , name: 'arroz'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'cereal'    , name: 'trigo'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  0, uweek: 0, buy: 0},
    {type: 'cereal'    , name: 'cebada'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  0, uweek: 0, buy: 0},
    {type: 'cereal'    , name: 'quinoa'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'cereal'    , name: 'centeno'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  0, uweek: 0, buy: 0},
    {type: 'cereal'    , name: 'sorgo'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  0, uweek: 0, buy: 0},
    {type: 'cereal'    , name: 'mijo'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  0, uweek: 0, buy: 0},
    {type: 'cereal'    , name: 'amaranto'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  0, uweek: 0, buy: 0},
    {type: 'cereal'    , name: 'farro'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  0, uweek: 0, buy: 0},
    {type: 'cereal'    , name: 'espelta'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  0, uweek: 0, buy: 0},

    {type: 'tuber'     , name: 'patata'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  3, uweek: 0, buy: 0},
    {type: 'tuber'     , name: 'batata'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  3, uweek: 0, buy: 0},
    {type: 'tuber'     , name: 'yuca'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'tuber'     , name: 'ñame'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'tuber'     , name: 'boniato'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  3, uweek: 0, buy: 0},
    {type: 'tuber'     , name: 'camote'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'tuber'     , name: 'arracacha'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},

    {type: 'vegetable' , name: 'acelga'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'albahaca'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'apio'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'brócoli'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'coliflor'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'col de bruselas', months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'col rizada'     , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'espárrago'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'espinaca'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'lechuga'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'perejil'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'puerro'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'rúcula'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'repollo'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'tomate'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'zanahoria'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'alcachofa'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'berenjena'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'calabacín'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'chirivía'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'chícharo'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'judía verde'    , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'pimiento'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'calabaza'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'rábano'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'remolacha'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'nabo'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'pepino'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 49, uweek: 0, buy: 0},
    {type: 'vegetable' , name: 'berro'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 49, uweek: 0, buy: 0},

    {type: 'legume'    , name: 'garbanzos'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2]            , nweek:  4, uweek: 0, buy: 0},
    {type: 'legume'    , name: 'lentejas'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2]            , nweek:  4, uweek: 0, buy: 0},
    {type: 'legume'    , name: 'frijoles'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  4, uweek: 0, buy: 0},
    {type: 'legume'    , name: 'judías verdes'  , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2]            , nweek:  4, uweek: 0, buy: 0},
    {type: 'legume'    , name: 'alubias'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2]            , nweek:  4, uweek: 0, buy: 0},
    {type: 'legume'    , name: 'guisantes'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'legume'    , name: 'soja'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [1, 3]         , nweek:  4, uweek: 0, buy: 0},

    {type: 'meat'      , name: 'ternera'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  3, uweek: 0, buy: 0},
    {type: 'meat'      , name: 'cerdo'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  3, uweek: 0, buy: 0},
    {type: 'meat'      , name: 'conejo'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  3, uweek: 0, buy: 0},
    {type: 'meat'      , name: 'pollo'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  3, uweek: 0, buy: 0},
    {type: 'meat'      , name: 'pavo'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  3, uweek: 0, buy: 0},

    {type: 'egg'       , name: 'huevo'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  7, uweek: 0, buy: 0},

    {type: 'fish'      , name: 'atún'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'fish'      , name: 'salmón'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'fish'      , name: 'trucha'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'fish'      , name: 'merluza'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'fish'      , name: 'bacalao'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'fish'      , name: 'sardina'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'fish'      , name: 'robalo'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  4, uweek: 0, buy: 0},
    {type: 'fish'      , name: 'dorada'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'fish'      , name: 'caballa'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'fish'      , name: 'lenguado'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'fish'      , name: 'mero'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  4, uweek: 0, buy: 0},
    {type: 'fish'      , name: 'pescadilla'     , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  4, uweek: 0, buy: 0},
    {type: 'fish'      , name: 'anchova'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  4, uweek: 0, buy: 0},

    {type: 'dairy'     , name: 'leche'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0]            , nweek:  7, uweek: 0, buy: 0},
    {type: 'dairy'     , name: 'yogurt'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [1]            , nweek: 14, uweek: 0, buy: 0},
    {type: 'dairy'     , name: 'queso'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 14, uweek: 0, buy: 0},
    {type: 'dairy'     , name: 'mantequilla'    , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek: 14, uweek: 0, buy: 0},
    {type: 'dairy'     , name: 'requesón'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [1, 3]         , nweek: 14, uweek: 0, buy: 0},
    {type: 'dairy'     , name: 'cuajada'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [1, 3]         , nweek: 14, uweek: 0, buy: 0},
    {type: 'dairy'     , name: 'kefir'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [1]            , nweek: 14, uweek: 0, buy: 0},

    {type: 'dried'     , name: 'almendra'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0, 1, 3]      , nweek: 49, uweek: 0, buy: 0},
    {type: 'dried'     , name: 'avellana'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0, 1, 3]      , nweek: 49, uweek: 0, buy: 0},
    {type: 'dried'     , name: 'anacardo'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0, 1, 3]      , nweek: 49, uweek: 0, buy: 0},
    {type: 'dried'     , name: 'cacahuete'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0, 1, 3]      , nweek: 49, uweek: 0, buy: 0},
    {type: 'dried'     , name: 'castaña'        , months: [9, 10, 11]                           , times: [0, 1, 3]      , nweek: 49, uweek: 0, buy: 0},
    {type: 'dried'     , name: 'dátil'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0, 1, 3]      , nweek: 49, uweek: 0, buy: 0},
    {type: 'dried'     , name: 'nuez'           , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0, 1, 3]      , nweek: 49, uweek: 0, buy: 0},
    {type: 'dried'     , name: 'pasas'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0, 1, 3]      , nweek: 49, uweek: 0, buy: 0},
    {type: 'dried'     , name: 'piñón'          , months: [5, 6, 7, 8, 9]                       , times: [0, 1, 3]      , nweek: 49, uweek: 0, buy: 0},
    {type: 'dried'     , name: 'pipas'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0, 1, 3]      , nweek: 49, uweek: 0, buy: 0},
    {type: 'dried'     , name: 'pistacho'       , months: [5, 6, 7]                             , times: [0, 1, 3]      , nweek: 49, uweek: 0, buy: 0},
    {type: 'dried'     , name: 'sésamo'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0, 1, 3]      , nweek: 49, uweek: 0, buy: 0},

    {type: 'pasta'     , name: 'espaguetis'     , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2]            , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'macarrones'     , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2]            , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'penne'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'fusilli'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'ravioli'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'lasaña'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2]            , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'fettuccine'     , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'tagliatelle'    , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'tortellini'     , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'pappardelle'    , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'canelones'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2]            , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'conchiglie'     , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'farfalle'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'orecchiette'    , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'bucatini'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'gnocchi'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'fideuá'         , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2]            , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'cavatelli'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'ditalini'       , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'fregola'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: []             , nweek:  3, uweek: 0, buy: 0},
    {type: 'pasta'     , name: 'fideo'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek:  3, uweek: 0, buy: 0},

    {type: 'other'     , name: 'ajo'            , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'other'     , name: 'cebolla'        , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'other'     , name: 'champiñon'      , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [2, 4]         , nweek: 49, uweek: 0, buy: 0},
    {type: 'other'     , name: 'cacao'          , months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], times: [0]            , nweek: 21, uweek: 0, buy: 0}
];
// Funciones
function main() {
    //
    if (isPhone) {
        var msg = '';

        if (screen.orientation && screen.orientation.type) {
            // Obtener el tipo de orientación actual
            var orientacionActual = screen.orientation.type;
            msg += '\nOrientación actual:' + orientacionActual;

            // Intentar bloquear la orientación en modo horizontal
            screen.orientation.lock('landscape').then(function() {
                msg += '\nOrientación bloqueada en modo horizontal';
            }).catch(function(error) {
                msg += '\nError al bloquear la orientación:' + error;
            });
        } else {
            msg += '\nLa API de orientación de pantalla no es compatible en este navegador.';
        }

        toast(msg, 10000);
    }
    //
    $('.material-symbols-outlined').on('click', function(e) {
        var d_flatware =  '';

        if (($(this).text()).indexOf('flatware') != -1) {
            d_flatware = flatware(ka);
            $('#d_flatware').html(d_flatware);

        } else if (($(this).text()).indexOf('send') != -1) {
            ka['html']       = false;
            ka['k_flatware'] = k_flatware;
            d_flatware = flatware(ka);

            // Crea un lugar temporal para guardar el valor a copiar
            var $temp = $('<textarea>').val(d_flatware).appendTo('body').select();
            // Ejecuta el evento copiar
            document.execCommand('copy');
            // Borra temporal
            $temp.remove();

            toast('Texto copiado', 3000);
        } else if (($(this).text()).indexOf('close') != -1) {
            $('.edit').hide();
            k_id = '';

            ka['html']       = true;
            $('#d_flatware').html(flatware(ka));
        }
    });

    // Generar aleatorio
    $('.menu div:nth-of-type(1) span:nth-child(2)').on('click', function(e) {
        ka['html']       = true;
        $('#d_flatware').html(flatware(ka));
    });

    // Enviar
    $('.menu div:nth-of-type(2) span:nth-child(2)').on('click', function(e) {
        ka['html']       = false;
        ka['k_flatware'] = k_flatware;

        // Crea un lugar temporal para guardar el valor a copiar
        var $temp = $('<textarea>').val(flatware(ka)).appendTo('body').select();
        // Ejecuta el evento copiar
        document.execCommand('copy');
        // Borra temporal
        $temp.remove();

        toast('Texto copiado', 3000);
    });

    $('#d_flatware').html(flatware(ka));

    // Lista de ingredientes
    var taux0 = ingredients.map(ingredients => ingredients.name);

    $.each(taux0, function (i, item) {
        $('[name=ingredients]').append($('<option>', {
            value: i,
            text : item.capitalize()
        }));
    });

    //
    $('[name=ingredients]')
        .change(function(e) {setPlat();});

    $('.edit').hide();

    update();
}

// Asignar valor del campo
function set(object) {
    var index = $(object).attr('name');

    update();
}

// Actualizar valores de la clase
function update() {

}

// Generar menu semanal
function flatware(kwargs = {html: true, rand: true, k_flatware : {0: [], 1: [], 2: [], 3: [], 4: []}}) {
    // Variables
    var out  = 'Menu planificado para los siguientes días: \n';
    // Inicalizar ingredientes
    $.each(ingredients, function(index, item) {
        item.uweek = 0;
        item.buy = 0;
    });

    if (typeof kwargs['rand'] == 'undefined') {
        kwargs['rand'] = true;
    }

    if (typeof kwargs['html'] == 'undefined') {
        kwargs['html'] = true;
    }

    if (typeof kwargs['k_flatware'] == 'undefined') {
        kwargs['rand'] = true;
    }

    // Resesera platos
    if (kwargs['rand']) {
        k_flatware = {0: [], 1: [], 2: [], 3: [], 4: []};

        // Almuerzo y Cena
        var eat       = [];
        var dinner    = [];

        for (var i0 = 0; i0 < 4; i0++) {
            eat   [i0] = plat(2);
            //setUweek(eat[i0]);
            dinner[i0] = plat(4);
            //setUweek(dinner[i0]);
        }

        for (var i0 = 0; i0 < 7; i0++) {
            var t = 0;
            var aux = '';

            aux = plat(t);
            k_flatware[t][i0] = (aux.substring(0, aux.length - 1)).split(', ');

            aux = plat(++t);
            k_flatware[t][i0] = (aux.substring(0, aux.length - 1)).split(', ');

            ++t;
            aux = eat[[0, 1, 0, 1, 2, 3, 2, 3][i0]];
            k_flatware[t][i0] = (aux.substring(0, aux.length - 1)).split(', ');

            aux = plat(++t);
            k_flatware[t][i0] = (aux.substring(0, aux.length - 1)).split(', ');

            ++t;
            aux = dinner[[0, 1, 0, 1, 2, 3, 2, 3][i0]];
            k_flatware[t][i0] = (aux.substring(0, aux.length - 1)).split(', ');
        }
    } else {
        k_flatware = kwargs['k_flatware'];
    }

    // Inicalizar ingredientes
    $.each(ingredients, function(index, item) {
        item.uweek = 0;
        item.buy = 0;
    });

    //Escribir la semana
    for (var i0 = 0; i0 < 7; i0++) {
        var fec = (new Date()).addDays(i0);
        var d   = ('0' + fec.getDate()).slice(-2);

        var nw  = name_week[[5, 6, 0, 1, 2, 3, 4][parseInt(fec.getDay())]];
        var nm  = name_month[parseInt(fec.getMonth())];
        out += `\n\n    ${nw.padEnd(10)}${d} de ${nm.padEnd(9)}de ${fec.getFullYear()}.`;

        for (var t = 0; t <= 4; t++) {
            var iw  = [5, 6, 0, 1, 2, 3, 4][parseInt(fec.getDay())];
            var aux = '';

            if (k_flatware[t].length == 0) {
                aux = plat(t);
                k_flatware[t][iw] = (aux.substring(0, aux.length - 1)).split(', ');
            }

            aux = k_flatware[t][iw].join(', ') + '.';
            out += `\n        {edit_${t},${iw}}Para ${time[t].padEnd(9)}: ${aux}{/a}`;

            setBuy(aux);
        }
    }

    if (kwargs['html']) {
        out = (out.replaceAll(' ' , '&nbsp;')).replaceAll('\n' , '<br />');

        var s_t  = k_id.split(',')[0];
        var s_iw = k_id.split(',')[1];

        for (var i0 = 0; i0 < 7; i0++) {
            var fec = (new Date()).addDays(i0);
            var d   = ('0' + fec.getDate()).slice(-2);

            var nw  = name_week[[5, 6, 0, 1, 2, 3, 4][parseInt(fec.getDay())]];
            var nm  = name_month[parseInt(fec.getMonth() - 1)];

            var aux = `${d} de ${nm.padEnd(9)}de ${fec.getFullYear()}`;
            for (var t = 0; t <= 4; t++) {
                var iw  = [5, 6, 0, 1, 2, 3, 4][parseInt(fec.getDay())];

                if ((s_t == t) && (s_iw == iw)) {
                    out = out.replaceAll(`{edit_${t},${iw}}` , `<a style=\'color: #ff0000\' onClick=\"showPlat(\'${t},${iw}\', \'${aux}\')\" >`);
                } else {
                    out = out.replaceAll(`{edit_${t},${iw}}` , `<a onClick=\"showPlat(\'${t},${iw}\', \'${aux}\')\" >`);
                }

                out = out.replaceAll('{/a}', '</a>');
            }
        }
    } else {
        for (var i0 = 0; i0 < 7; i0++) {
            var fec = (new Date()).addDays(i0);
            var d   = ('0' + fec.getDate()).slice(-2);

            var nw  = name_week[[5, 6, 0, 1, 2, 3, 4][parseInt(fec.getDay())]];
            var nm  = name_month[parseInt(fec.getMonth() - 1)];

            for (var t = 0; t <= 4; t++) {
                var iw  = [5, 6, 0, 1, 2, 3, 4][parseInt(fec.getDay())];

                out = out.replaceAll(`{edit_${t},${iw}}` , '');
                out = out.replaceAll('{/a}', '');
            }
        }

        // Generar compra
        out += setShoppingList();
    }

    return out;
}

// Generar plato
function plat(i_time = 0) {
    var out = [];

    var kwargs = {time: i_time, nValues: 1};

    if (i_time == 0) {
        kwargs['types'] = ['dairy' ];
        out = out.concat(getIngredients(kwargs));
        kwargs['types'] = ['cereal'];
        out = out.concat(getIngredients(kwargs));
        kwargs['types'] = ['other' ];
        out = out.concat(getIngredients(kwargs));
        kwargs['types'] = ['dried' ];
        out = out.concat(getIngredients(kwargs));

    } else if (i_time == 1) {
        kwargs['types'] = ['dairy'];
        out = out.concat(getIngredients(kwargs));
        kwargs['types'] = ['dried' ];
        out = out.concat(getIngredients(kwargs));

    } else if ((i_time == 2) || (i_time == 4)) {
        kwargs['types'] = ['pasta', 'tuber', 'vegetable', 'cereal', 'legume'];
        out = out.concat(getIngredients(kwargs));

        if (getType(out[out.length - 1]) == 'pasta') {
            kwargs['types'] = ['egg' , 'fish', 'meat'];
            out = out.concat(getIngredients(kwargs));

            kwargs['types'] = ['other'];
            kwargs['names'] = ['cebolla', 'ajo']
            out = out.concat(getIngredients(kwargs));

            kwargs['types'] = ['vegetable', 'other', 'legume'];
            kwargs['names'] = ['brócoli', 'coliflor', 'espinaca', 'tomate', 'zanahoria', 'calabacín', 'pimiento', 'calabaza', 'champiñon', 'guisantes', 'berenjena'];
            kwargs['nValues'] = 3;
            out = out.concat(getIngredients(kwargs));

            delete kwargs.names;
        } else if (getType(out[out.length - 1]) == 'tuber') {
            kwargs['types'] = ['egg' , 'fish', 'meat'];
            out = out.concat(getIngredients(kwargs));

            kwargs['types'] = ['vegetable', 'other', 'legume'];
            if (getType(out[out.length - 1]) == 'egg') {
                kwargs['names'] = ['calabacín'];
            } else {
                kwargs['names'] = ['brócoli', 'coliflor', 'espinaca', 'tomate', 'zanahoria', 'calabacín', 'pimiento', 'calabaza', 'champiñon', 'guisantes', 'berenjena'];
                kwargs['nValues'] = 3;
            }
            out = out.concat(getIngredients(kwargs));

            kwargs['types'] = ['other'];
            kwargs['names'] = ['cebolla'];
            out = out.concat(getIngredients(kwargs));

            delete kwargs.names;
        } else if (getType(out[out.length - 1]) == 'vegetable') {
            out.splice(out.length - 1, 1);

            kwargs['types'] = ['fish', 'meat'];
            out = out.concat(getIngredients(kwargs));

            kwargs['types'] = ['vegetable', 'other'];
            kwargs['names'] = ['tomate', 'calabacín', 'pimiento', 'cebolla'];
            kwargs['nValues'] = 4;
            out = out.concat(getIngredients(kwargs));

            kwargs['types'] = ['vegetable', 'other', 'legume'];
            kwargs['names'] = ['brócoli', 'coliflor', 'espinaca', 'zanahoria', 'calabaza', 'champiñon', 'guisantes', 'berenjena'];
            kwargs['nValues'] = 1;
            out = out.concat(getIngredients(kwargs));

            delete kwargs.names;
        } else if (getType(out[out.length - 1]) == 'cereal') {
            kwargs['types'] = ['egg' , 'fish', 'meat'];
            out = out.concat(getIngredients(kwargs));

            kwargs['types'] = ['other'];
            kwargs['names'] = ['ajo'];
            out = out.concat(getIngredients(kwargs));

            kwargs['types'] = ['vegetable', 'other', 'legume'];
            kwargs['names'] = ['brócoli', 'coliflor', 'espinaca', 'tomate', 'zanahoria', 'calabacín', 'pimiento', 'calabaza', 'champiñon', 'guisantes'];
            kwargs['nValues'] = 3;
            out = out.concat(getIngredients(kwargs));

            delete kwargs.names;
        } else if (getType(out[out.length - 1]) == 'legume') {
            if (out[out.length - 1] == 'lentejas') {
                kwargs['types'] = ['vegetable', 'other'];
                kwargs['names'] = ['tomate', 'cebolla', 'pimiento', 'zanahoria'];
                kwargs['nValues'] = 5;
                out = out.concat(getIngredients(kwargs));

                kwargs['types'] = ['meat'];
                kwargs['names'] = ['cerdo'];
                kwargs['nValues'] = 1;
                out = out.concat(getIngredients(kwargs));
            } else if (out[out.length - 1] == 'alubias') {
                kwargs['types'] = ['vegetable', 'other'];
                kwargs['names'] = ['tomate', 'cebolla', 'pimiento', 'zanahoria', 'calabaza'];
                kwargs['nValues'] = 5;
                out = out.concat(getIngredients(kwargs));

                kwargs['types'] = ['meat'];
                kwargs['names'] = ['pollo', 'cerdo'];
                kwargs['nValues'] = 2;
                out = out.concat(getIngredients(kwargs));
            } else if (out[out.length - 1] == 'garbanzos') {
                kwargs['types'] = ['vegetable', 'other', 'legume'];
                kwargs['names'] = ['cebolla', 'zanahoria', 'calabaza', 'judías verdes'];
                kwargs['nValues'] = 4;
                out = out.concat(getIngredients(kwargs));

                kwargs['types'] = ['meat'];
                kwargs['names'] = ['ternera', 'cerdo'];
                kwargs['nValues'] = 1;
                out = out.concat(getIngredients(kwargs));
            } else if (out[out.length - 1] == 'judías verdes') {
                kwargs['types'] = ['vegetable', 'other', 'legume'];
                kwargs['names'] = ['cebolla', 'zanahoria', 'calabaza', 'garbanzos'];
                kwargs['nValues'] = 4;
                out = out.concat(getIngredients(kwargs));

                kwargs['types'] = ['meat'];
                kwargs['names'] = ['ternera', 'cerdo'];
                kwargs['nValues'] = 1;
                out = out.concat(getIngredients(kwargs));
            }

            kwargs['types'] = ['tuber', 'cereal'];
            kwargs['names'] = ['patata', 'arroz'];

            delete kwargs.names;
            kwargs['nValues'] = 1;
            out = out.concat(getIngredients(kwargs));

            kwargs['names'] = ['naranja', 'mandarina', 'kiwi', 'pomelo', 'mango', 'melón'];
        }

    } else if (i_time == 3) {
        kwargs['types'] = ['dried' ];
        out = out.concat(getIngredients(kwargs));
    }

    kwargs['types'] = ['fruit' ];
    kwargs['nValues'] = 1;
    out = out.concat(getIngredients(kwargs));

    return out.join(', ') + '.';
}

// Generar lista de la compra
function setShoppingList() {
    var out = '';

    // Inicalizar ingredientes
    $.each(ingredients, function(index, item) {
        item.uweek = 0;
        item.buy = 0;
    });

    // Informar elementos comprados
    for (var i0 = 0; i0 < 7; i0++) {
        for (var i1 = 0; i1 <= 4; i1++) {
            setBuy(k_flatware[i1][i0].join(', ') + '.');
        }
    }

    var taux0 = $.grep(ingredients, function(table) {
        return table.buy > 0;
    });

    out += '\n\n' + (' ').repeat(4) + 'Hay que comprar:';
    for (var i0 = 0; i0 < taux0.length; i0++) {
        out += '\n' + (' ').repeat(8) + ((taux0[i0]['buy'] > 9?'':'0') + taux0[i0]['buy']) + ' ' + taux0[i0]['name'].capitalize() + '.';
    }

    return out;
}

// Devolver ingredientes
function getIngredients(kwargs = {types: [], names: [], time: 0, nValues: 1}) {
    var out    = [];
    var tb_rnd = [];
    var taux0  = ingredients;

    // Filtramos por la cantidad de vez que se ha asado
    taux0 = $.grep(taux0, function(table) {
        return table.uweek < table.nweek;
    });

    // Filtramos por mes
    taux0 = $.grep(taux0, function(table) {
        return table.months.includes(new Date().getMonth());
    });

    // Filtramos por los tipos de ingredientes
    if (typeof kwargs['types'] != 'undefined') {
        taux0 = $.grep(taux0, function(table) {
            return kwargs['types'].some(function(type) {
                return table.type.includes(type);
            });
        });
    }

    // Filtramos por los nombres de ingredientes
    if (typeof kwargs['names'] != 'undefined') {
        taux0 = $.grep(taux0, function(table) {
            return kwargs['names'].some(function(name) {
                return table.name.includes(name);
            });
        });
    }

    // Filtramos la hora en la que se come
    if (typeof kwargs['time'] != 'undefined') {
        taux0 = $.grep(taux0, function(table) {
            return table.times.includes(kwargs['time']);
        });
    }

    // Obtener cantidad de valores aleatorios
    if (typeof kwargs['nValues'] == 'undefined') {
        kwargs['nValues'] = 1;
    } else {
        if (kwargs['nValues'] <= 0) {
            kwargs['nValues'] = 1;
        }
    }

    // Generar la tabla de retorno
    var tb_rnd = taux0.map(taux0 => taux0.name);

    for (var i0 = 0; i0 < kwargs['nValues']; i0++) {
        var i_rdn = Math.floor(Math.random() * tb_rnd.length);

        if (typeof tb_rnd[i_rdn] == 'undefined') {
            break;
        }

        out.push(tb_rnd[i_rdn]);
        tb_rnd.splice(i_rdn, 1);
    }

    if (typeof out[0] != 'undefined') {
        return out;
    }

    return [];
}

// Sumar 1 al tipo de ingrediente utilizado
function setUweek(names = []) {
    var taux0 = (names.substring(0, names.length - 1)).split(', ');

    for (var i1 = 0; i1 < taux0.length; i1++) {

        for (var i2 = 0; i2 < ingredients.length; i2++) {
            if (ingredients[i2]['name'] == taux0[i1]) {

                $.each(ingredients, function(index, item) {
                    if(item.type === ingredients[i2]['type']) {
                        item.uweek = ++item.uweek;
                    }
                });

                break;
            }
        }
    }
}

// Sumar 1 al buy del ingrediente utilizado
function setBuy(names = '') {
    var taux0 = (names.substring(0, names.length - 1)).split(', ');

    for (var i1 = 0; i1 < taux0.length; i1++) {

        for (var i2 = 0; i2 < ingredients.length; i2++) {
            if (ingredients[i2]['name'] == taux0[i1]) {

                ingredients[i2]['buy'] = ++ingredients[i2]['buy'];

                break;
            }
        }
    }
}

// Obtener el tipo de ingrediente
function getType(name = '') {
    if (name != '') {
        for (var i0 = 0; i0 < ingredients.length; i0++) {
            if (ingredients[i0]['name'] == name) {
                return ingredients[i0]['type'];
            }
        }
    }

    return null;
}

// Actualizar ese dia con los ingredientes marcados
function setPlat() {
    // Generar un array con lo selecionado
    var taux = [];

    $.each($('[name=ingredients]').val(), function(i, item) {
        taux = taux.concat(ingredients[parseInt(item)].name);
    });

    var t  = k_id.split(',')[0];
    var iw = k_id.split(',')[1];

    // Se actualiza el parrafo d_flatware
    k_flatware[t][iw] = taux;
    ka['rand'] = false;
    ka['html'] = true;
    ka['k_flatware'] = k_flatware;

    $('#d_flatware').html(flatware(ka));
}

// Mostrar los ingredientes de un plato id = ${t},${iw}
function showPlat(id = '', fec = '') {
    $('.edit').show();
    k_id = id;

    var t  = id.split(',')[0];
    var iw = id.split(',')[1];

    ka['rand'] = false;
    ka['html'] = true;
    ka['k_flatware'] = k_flatware;
    $('#d_flatware').html(flatware(ka));

    $('#ediv').html('Editar el ' + fec + '.<br />Para ' + time[t] + '.');

    // Borrar los selecionados previamente
    $('select[multiple]').val([]);

    // Seleccionamos aquello que corresponda a ese dia
    $.each(k_flatware[t][iw], function(i, item) {
        var i_value = ingredients.findIndex(ingredients => ingredients.name.capitalize() === item.capitalize());
        $('[name=ingredients] option').eq(i_value).prop('selected', true);
    });
}