let department = [
    { change1: "ART 101", change2: "Digital Imaging Studio I", change3: "3 CRS.4 HRS." },
    { change1: "ART 102", change2: "Survey of Art History I", change3: "3 CRS.3 HRS." },


    { change1: "ART 104", change2: "Survey of Art History II", change3: "3 CRS.3 HRS." },


    { change1: "ART 106", change2: "Modern and Contemporary Art", change3: "3 CRS.3 HRS." },


    { change1: "ART 107", change2: "Color and Design I", change3: "3 CRS.4 HRS." },


    { change1: "ART 110", change2: "Art Survey I", change3: "2 CRS.2 HRS." },


    { change1: "ART 113", change2: "History of Graphic Design", change3: "3 CRS.3 HRS." },


    { change1: "ART 122", change2: "History of Photography", change3: "3 CRS.3 HRS." },


    { change1: "ART 125", change2: "Introduction to Latin American Art", change3: "3 CRS.3 HRS." },


    { change1: "ART 126", change2: "Introduction to African Art", change3: "3 CRS.3 HRS." },


    { change1: "ART 133", change2: "Photography I", change3: "3 CRS.3 HRS." },


    { change1: "ART 143", change2: "3D Design: Materials and Methods", change3: "3 CRS.3 HRS." },


    { change1: "ART 161", change2: "Drawing I", change3: "2 CRS.2 HRS." },


    { change1: "ART 166", change2: "Drawing Studio I", change3: "3 CRS.3 HRS." },


    { change1: "ART 174", change2: "Painting Studio I", change3: "3 CRS.3 HRS." },


    { change1: "ART 176", change2: "Comic Art 1", change3: "3 CRS.3 HRS.3 LAB HRS." },


    { change1: "ART 183", change2: "Sculpture Studio I", change3: "3 CRS.3 HRS." },


    { change1: "ART 201", change2: "Digital Imaging Studio II", change3: "3 CRS.2 HRS.2 LAB HRS." },


    { change1: "ART 215", change2: "Typography and Layout", change3: "3 CRS.4 HRS." },


    { change1: "ART 221", change2: "Pre-Columbian Art of Mesoamerica and the Andes", change3: "3 CRS.3 HRS." },


    { change1: "ART 225", change2: "Digital Imaging for Graphic Design", change3: "3 CRS.4 HRS." },


    { change1: "ART 230", change2: "Design I: Introduction to Painting and Drawing techniques", change3: "2 CRS.2 HRS.2 LAB HRS." },


    { change1: "ART 233", change2: "Photography II", change3: "3 CRS.2 HRS.2 LAB HRS." },


    { change1: "ART 235", change2: "Visual Communication and Design", change3: "3 CRS.4 HRS." },


    { change1: "ART 237", change2: "Photographic Studio & Light I", change3: "3 CRS.3 HRS." },


    { change1: "ART 238", change2: "Photography Experiments & Projects", change3: "3 CRS.3 HRS." },


    { change1: "ART 243", change2: "3D Design: Methods & Materials", change3: "3 CRS.3 HRS." },


    { change1: "ART 251", change2: "Asian Art History", change3: "3 CRS.3 HRS." },


    { change1: "ART 266", change2: "Drawing Studio II", change3: "3 CRS.3 HRS." },


    { change1: "ART 269", change2: "Life Drawing Studio I", change3: "3 CRS.3 HRS.3 LAB HRS." },


    { change1: "ART 270", change2: "Portrait Drawing", change3: "3 CRS.3 HRS." },


    { change1: "ART 274", change2: "Painting Studio II", change3: "3 CRS.3 HRS." },


    { change1: "ART 276", change2: "Comic Art 2", change3: "3 CRS.3 HRS." },


    { change1: "ART 283", change2: "Sculpture Studio II", change3: "3 CRS.3 HRS." },


    { change1: "ART 285", change2: "Figure Sculpture I", change3: "3 CRS.3 HRS." },


    { change1: "ART 290", change2: "Medieval Art: The Age of Faith and Migration", change3: "3 CRS.3 HRS." },


    { change1: "ART 292", change2: "Renaissance & Baroque Art: The Age of Discovery", change3: "3 CRS.3 HRS.3 LAB HRS." },


    { change1: "ART 293", change2: "Ancient Greece and Rome: Classical Art", change3: "3 CRS.3 HRS." },


    { change1: "ART 294", change2: "18th & 19th Century Art: The Age of Enlightenment and Industry", change3: "3 CRS.3 HRS." },


    { change1: "ART 295", change2: "African-American Art", change3: "3 CRS.3 HRS." },


    { change1: "ART 300", change2: "Documentary & Narrative Photography", change3: "3 CRS.4 HRS.2 LAB HRS." },


    { change1: "ART 303", change2: "Digital-Imaging Post Production", change3: "3 CRS.2 HRS.2 LAB HRS." },


    { change1: "ART 315", change2: "Print Process and Portfolio Lab", change3: "3 CRS.3 HRS." },


    { change1: "ART 335", change2: "Commercial Photography and Career Strategies", change3: "3 CRS.3 HRS." },


    { change1: "ART 366", change2: "Drawing Studio III", change3: "3 CRS.3 HRS." },


    { change1: "ART 369", change2: "Life Drawing Studio II", change3: "3 CRS.3 HRS." },


    { change1: "ART 374", change2: "Painting Studio III", change3: "3 CRS.3 HRS." },


    { change1: "ART 383", change2: "Sculpture Studio III", change3: "3 CRS.3 HRS." },


    { change1: "ART 420", change2: "Final Project Lab", change3: "3 CRS.4 HRS." },


    { change1: "ART 450", change2: "Final Thesis Lab", change3: "3 CRS.3 HRS." },


    { change1: "ART 801", change2: "African Art (Same as AFN 101)", change3: "2 CRS.2 HRS." },


    { change1: "ART 802", change2: "African-American Art", change3: "2 CRS.2 HRS." },


    { change1: "MUS 101", change2: "Fundamentals of Music", change3: "1 CRS.2 HRS." },


    { change1: "MUS 102", change2: "Understanding Music", change3: "3 CRS.3 HRS." },


    { change1: "MUS 103", change2: "Music and Western Society", change3: "3 CRS.3 HRS." },


    { change1: "MUS 104", change2: "The World of Jazz", change3: "3 CRS.3 HRS." },


    { change1: "MUS 105", change2: "Exploring Music", change3: "3 CRS.3 HRS." },


    { change1: "MUS 107", change2: "Introduction to World Music", change3: "3 CRS.3 HRS." },


    { change1: "MUS 109", change2: "Bebop to Hip-Hop", change3: "3 CRS.3 HRS." },


    { change1: "MUS 110", change2: "Music I: Introduction to Music", change3: "2 CRS.2 HRS." },


    { change1: "MUS 112", change2: "Music Theory I: Fundamentals of Music Theory", change3: "2 CRS.3 HRS." },


    { change1: "MUS 113, MUS 213", change2: "Musicianship I, Musicianship II", change3: "1 CRS.2 HRS." },


    { change1: "MUS 114", change2: "Music Business", change3: "3 CRS.3 HRS." },


    { change1: "MUS 116", change2: "Music and Movement in Learning (same as EDU 204)", change3: "3 CRS.3 HRS." },


    { change1: "MUS 117", change2: "Music Theory I", change3: "3 CRS.3 HRS." },


    { change1: "MUS 118", change2: "Aural Skills I", change3: "2 CRS.3 HRS." },


    { change1: "MUS 119", change2: "Keyboard Workshop I", change3: "1 CRS.2 HRS." },


    { change1: "MUS 120", change2: "Woodwind Class", change3: "1 CRS.2 HRS." },


    { change1: "MUS 121", change2: "Methods: Woodwinds", change3: "1 CRS.3 HRS." },


    { change1: "MUS 122", change2: "The World of Hip-Hop", change3: "3 CRS.3 HRS." },


    { change1: "MUS 123", change2: "Basics of Digital Music Production", change3: "3 CRS.3 HRS." },


    { change1: "MUS 124", change2: "Music Notation Software", change3: "2 CRS.2 HRS." },


    { change1: "MUS 125", change2: "Strings", change3: "1 CRS.2 HRS." },


    { change1: "MUS 126", change2: "Methods: Upper Strings - Violin and Viola", change3: "1 CRS.3 HRS." },


    { change1: "MUS 127", change2: "Methods: Lower Strings - Cello & String Bass", change3: "1 CRS.3 HRS." },


    { change1: "MUS 128", change2: "The Music of Latin America", change3: "3 CRS.3 HRS." },


    { change1: "MUS 129", change2: "Women in Music", change3: "3 CRS.3 HRS." },


    { change1: "MUS 130", change2: "Brasswind Class", change3: "1 CRS.2 HRS." },


    { change1: "MUS 131", change2: "Methods: Brass", change3: "1 CRS.3 HRS." },


    { change1: "MUS 132", change2: "The Music of Brazil", change3: "3 CRS.3 HRS." },


    { change1: "MUS 135", change2: "Percussion", change3: "1 CRS.2 HRS." },


    { change1: "MUS 136", change2: "Methods: Percussion", change3: "1 CRS.3 HRS." },


    { change1: "MUS 137", change2: "Jazz and Popular Music Theory I", change3: "3 CRS.3 HRS." },


    { change1: "MUS 138", change2: "Jazz and Popular Music Aural Skills I", change3: "3 CRS.3 HRS." },


    { change1: "MUS 140", change2: "Piano Class I", change3: "1 CRS.2 HRS." },


    { change1: "MUS 150", change2: "Piano Class II", change3: "1 CRS.2 HRS." },


    { change1: "MUS 160", change2: "Voice Class I", change3: "1 CRS.2 HRS." },


    { change1: "MUS 161", change2: "Methods: Voice", change3: "1 CRS.3 HRS." },


    { change1: "MUS 165", change2: "College Chorus I", change3: "1 CRS.3 HRS." },


    { change1: "MUS 166", change2: "College Chorus II", change3: "1 CRS.3 HRS." },


    { change1: "MUS 167", change2: "College Chorus III", change3: "1 CRS.3 HRS." },


    { change1: "MUS 168", change2: "College Chorus IV", change3: "1 CRS.3 HRS." },


    { change1: "MUS 170", change2: "Voice Class II", change3: "1 CRS.2 HRS." },


    { change1: "MUS 180", change2: "Guitar Class I", change3: "1 CRS.2 HRS." },


    { change1: "MUS 181", change2: "Methods: Guitar", change3: "1 CRS.3 HRS." },


    { change1: "MUS 190", change2: "Guitar Class II", change3: "1 CRS.2 HRS." },


    { change1: "MUS 207", change2: "16th Century Counterpoint", change3: "1 CRS.2 HRS." },


    { change1: "MUS 212", change2: "Music Theory II: Elementary Harmony", change3: "2 CRS.3 HRS." },


    { change1: "MUS 217", change2: "Music Theory II", change3: "3 CRS.3 HRS." },


    { change1: "MUS 218", change2: "Aural Skills II", change3: "2 CRS.3 HRS." },


    { change1: "MUS 219", change2: "Keyboard Workshop II", change3: "1 CRS.2 HRS." },


    { change1: "MUS 220", change2: "Music in World Culture", change3: "2 CRS.2 HRS." },


    { change1: "MUS 222", change2: "Musical Theatre: Acting the Song, Level I (Same as THE 222)", change3: "3 CRS.3 HRS." },


    { change1: "MUS 225", change2: "Introduction to Digital Music", change3: "3 CRS.4 HRS." },


    { change1: "MUS 230", change2: "African-American Music", change3: "2 CRS.2 HRS." },


    { change1: "MUS 235", change2: "Basics of Digital Music Production", change3: "1 CRS.2 HRS." },


    { change1: "MUS 237", change2: "Jazz and Popular Music Theory II", change3: "3 CRS.3 HRS." },


    { change1: "MUS 238", change2: "Jazz and Popular Music Aural Skills II", change3: "3 CRS.3 HRS." },


    { change1: "MUS 240, MUS 250", change2: "Piano Class III, Piano Class IV", change3: "1 CRS.2 HRS." },


    { change1: "MUS 265", change2: "Concert Choir I", change3: "1 CRS.3 HRS." },


    { change1: "MUS 266", change2: "Concert Choir II", change3: "1 CRS.3 HRS." },


    { change1: "MUS 267", change2: "Concert Choir III", change3: "1 CRS.3 HRS." },


    { change1: "MUS 268", change2: "Concert Choir IV", change3: "1 CRS.3 HRS." },


    { change1: "MUS 301", change2: "Jazz Performance Workshop I", change3: "1 CRS.3 HRS." },


    { change1: "MUS 302", change2: "Jazz Performance Workshop II", change3: "1 CRS.3 HRS." },


    { change1: "MUS 303", change2: "Jazz Performance Workshop III", change3: "1 CRS.3 HRS." },


    { change1: "MUS 304", change2: "Jazz Performance Workshop IV", change3: "1 CRS.3 HRS." },


    { change1: "MUS 305", change2: "Orchestral Performance I", change3: "1 CRS.3 HRS." },


    { change1: "MUS 306", change2: "Orchestral Performance II", change3: "1 CRS.3 HRS." },


    { change1: "MUS 307", change2: "Orchestral Performance III", change3: "1 CRS.3 HRS." },


    { change1: "MUS 308", change2: "Orchestral Performance IV", change3: "1 CRS.3 HRS." },


    { change1: "MUS 312", change2: "Music Theory II : Advanced Harmony", change3: "2 CRS.3 HRS." },


    { change1: "MUS 313, MUS 413", change2: "Musicianship III, Musicianship IV", change3: "1 CRS.2 HRS." },


    { change1: "MUS 317", change2: "Music Theory III", change3: "3 CRS.3 HRS." },


    { change1: "MUS 318", change2: "Aural Skills III", change3: "2 CRS.3 HRS." },


    { change1: "MUS 319", change2: "Keyboard Workshop III", change3: "1 CRS.2 HRS." },


    { change1: "MUS 351", change2: "Arranging I", change3: "2 CRS.2 HRS." },


    { change1: "MUS 352", change2: "Arranging II", change3: "2 CRS.2 HRS." },


    { change1: "MUS 412", change2: "Music Theory IV: Advanced Harmony", change3: "2 CRS.3 HRS." },


    { change1: "MUS 418", change2: "Aural Skills IV", change3: "2 CRS.3 HRS." },


    { change1: "MUS 419", change2: "Keyboard Workshop IV", change3: "1 CRS.2 HRS." },


    { change1: "MUS 501", change2: "Wind Ensemble I", change3: "1 CRS.3 HRS." },


    { change1: "MUS 502", change2: "Wind Ensemble II", change3: "1 CRS.3 HRS." },


    { change1: "MUS 503", change2: "Wind Ensemble III", change3: "1 CRS.3 HRS." },


    { change1: "MUS 504", change2: "Wind Ensemble IV", change3: "1 CRS.3 HRS." },


    { change1: "MUS 510", change2: "Instrumental Ensemble I", change3: "1 CRS.2 HRS." },


    { change1: "MUS 520", change2: "Instrumental Ensemble II", change3: "1 CRS.2 HRS." },


    { change1: "MUS 530", change2: "Instrumental Ensemble III", change3: "1 CRS.2 HRS." },


    { change1: "MUS 540", change2: "Instrumental Ensemble IV", change3: "1 CRS.2 HRS." },


    { change1: "MUS 601", change2: "Brass Ensemble I", change3: "1 CRS.3 HRS." },


    { change1: "MUS 602", change2: "Brass Ensemble II", change3: "1 CRS.3 HRS." },


    { change1: "MUS 603", change2: "Brass Ensemble III", change3: "1 CRS.3 HRS." },


    { change1: "MUS 604", change2: "Brass Ensemble IV", change3: "1 CRS.3 HRS." },


    { change1: "MUS 611-648", change2: "Private Instruction", change3: "1 CRS." },


    { change1: "MUS 635", change2: "Private Instruction", change3: "1 CRS.1 HRS." },


    { change1: "MUS 651", change2: "Applied Studies: Strings I - Violin, Viola, Cello & Double Bass", change3: "2 CRS.3 HRS." },


    { change1: "MUS 652", change2: "Applied Studies: Strings II - Violin, Viola, Cello & Double Bass", change3: "2 CRS.3 HRS." },


    { change1: "MUS 653", change2: "Applied Studies: Strings III - Violin, Viola, Cello & Double Bass", change3: "2 CRS.3 HRS." },


    { change1: "MUS 654", change2: "Applied Studies: Strings IV - Violin, Viola, Cello & Double Bass", change3: "2 CRS.3 HRS." },


    { change1: "MUS 656", change2: "Applied Studies: Piano I", change3: "2 CRS.3 HRS." },


    { change1: "MUS 657", change2: "Applied Studies: Piano II", change3: "2 CRS.3 HRS." },


    { change1: "MUS 658", change2: "Applied Studies: Piano III", change3: "2 CRS.3 HRS." },


    { change1: "MUS 659", change2: "Applied Studies: Piano IV", change3: "2 CRS.3 HRS." },


    { change1: "MUS 661", change2: "Applied Studies: Woodwinds I", change3: "2 CRS.3 HRS." },


    { change1: "MUS 662", change2: "Applied Studies: Woodwinds II", change3: "2 CRS.3 HRS." },


    { change1: "MUS 663", change2: "Applied Studies: Woodwinds III", change3: "2 CRS.3 HRS." },


    { change1: "MUS 664", change2: "Applied Studies: Woodwinds IV", change3: "2 CRS.3 HRS." },


    { change1: "MUS 666", change2: "Applied Studies: Brass I", change3: "2 CRS.3 HRS." },


    { change1: "MUS 667", change2: "Applied Studies: Brass II", change3: "2 CRS.3 HRS." },


    { change1: "MUS 668", change2: "Applied Studies: Brass III", change3: "2 CRS.3 HRS." },


    { change1: "MUS 669", change2: "Applied Studies: Brass IV", change3: "2 CRS.3 HRS." },


    { change1: "MUS 671", change2: "Applied Studies: Voice I", change3: "2 CRS.3 HRS." },


    { change1: "MUS 672", change2: "Applied Studies: Voice II", change3: "2 CRS.3 HRS." },


    { change1: "MUS 673", change2: "Applied Studies: Voice III", change3: "2 CRS.3 HRS." },


    { change1: "MUS 674", change2: "Applied Studies: Voice IV", change3: "2 CRS.3 HRS." },


    { change1: "MUS 676", change2: "Applied Studies: Guitar I", change3: "2 CRS.3 HRS." },


    { change1: "MUS 677", change2: "Applied Studies: Guitar II", change3: "2 CRS.3 HRS." },


    { change1: "MUS 678", change2: "Applied Studies: Guitar III", change3: "2 CRS.3 HRS." },


    { change1: "MUS 679", change2: "Applied Studies: Guitar IV", change3: "2 CRS.3 HRS." },


    { change1: "MUS 681", change2: "Composition I", change3: "3 CRS.3 HRS." },


    { change1: "MUS 682", change2: "Composition II", change3: "3 CRS.3 HRS." },


    { change1: "MUS 683", change2: "Composition III", change3: "3 CRS.3 HRS." },


    { change1: "MUS 684", change2: "Composition IV", change3: "3 CRS.3 HRS." },


    { change1: "MUS 686", change2: "Applied Studies: Percussion I", change3: "2 CRS.3 HRS." },


    { change1: "MUS 687", change2: "Applied Studies: Percussion II", change3: "2 CRS.3 HRS." },


    { change1: "MUS 688", change2: "Applied Studies: Percussion III", change3: "2 CRS.3 HRS." },


    { change1: "MUS 689", change2: "Applied Studies: Percussion IV", change3: "2 CRS.3 HRS." },


    { change1: "MUS 701", change2: "String Ensemble I", change3: "1 CRS.3 HRS." },


    { change1: "MUS 702", change2: "String Ensemble II", change3: "1 CRS.3 HRS." },


    { change1: "MUS 703", change2: "String Ensemble III", change3: "1 CRS.3 HRS." },


    { change1: "MUS 704", change2: "String Ensemble IV", change3: "1 CRS.3 HRS." },


    { change1: "MUS 705", change2: "Guitar Ensemble I", change3: "1 CRS.3 HRS." },


    { change1: "MUS 706", change2: "Guitar Ensemble II", change3: "1 CRS.3 HRS." },


    { change1: "MUS 707", change2: "Guitar Ensemble III", change3: "1 CRS.3 HRS." },


    { change1: "MUS 708", change2: "Guitar Ensemble IV", change3: "1 CRS.3 HRS." },


    { change1: "MUS 881", change2: "Puerto Rican Music", change3: "3 CRS.3 HRS." }
]

let InputDepartment = "";

for (let i = 0; i < department.length; i++) {
    InputDepartment += `<li>${department[i].change1}&nbsp ${department[i].change2}&nbsp${department[i].change3} </li>`
}

document.getElementById("dep1").innerHTML = InputDepartment;

let department2 = [{ change1: "AST 109", change2: "Astronomy: General Observations", change3: "3 CRS.1 HRS.2 LAB HRS." },


{ change1: "AST 110", change2: "General Astronomy", change3: "4 CRS.3 HRS.2 LAB HRS." },


{ change1: "AST 111", change2: "Astronomy: Observations and Models", change3: "4 CRS.2 HRS.3 LAB HRS." },


{ change1: "BIO 108", change2: "General Biology Theory", change3: "3 CRS.3 HRS." },


{ change1: "BIO 109", change2: "General Biology", change3: "3 CRS.1 HRS.2 LAB HRS." },


{ change1: "BIO 110", change2: "General Biology", change3: "4 CRS.5 HRS.2 LAB HRS." },


{ change1: "BIO 111", change2: "Human Biology", change3: "4 CRS.3 HRS.2 LAB HRS." },


{ change1: "BIO 210", change2: "Biology I", change3: "4 CRS.6 HRS.3 LAB HRS." },


{ change1: "BIO 220", change2: "Biology II", change3: "4 CRS.3 HRS.3 LAB HRS." },


{ change1: "BIO 230", change2: "Fundamentals of Microbiology", change3: "4 CRS.6 HRS.3 LAB HRS." },


{ change1: "BIO 240", change2: "Genetics", change3: "4 CRS.6 HRS.3 LAB HRS." },


{ change1: "BIO 260", change2: "Cell Biology", change3: "4 CRS.6 HRS.3 LAB HRS." },


{ change1: "BIO 270", change2: "Plant Biology", change3: "4 CRS.6 HRS." },


{ change1: "BIO 420", change2: "Microbiology", change3: "4 CRS.6 HRS.3 LAB HRS." },


{ change1: "BIO 425", change2: "Anatomy and Physiology I", change3: "4 CRS.6 HRS.3 LAB HRS." },


{ change1: "BIO 426", change2: "Anatomy and Physiology II", change3: "4 CRS.6 HRS.3 LAB HRS." },


{ change1: "BTE 201", change2: "Introduction to Biotechnology", change3: "5 CRS.4 HRS.3 LAB HRS." },


{ change1: "CHE 108", change2: "Concepts in Chemistry", change3: "3 CRS.3 HRS." },


{ change1: "CHE 109", change2: "Concepts in Chemistry Laboratory", change3: "3 CRS.1 HRS.2 LAB HRS." },


{ change1: "CHE 110", change2: "General Chemistry", change3: "4 CRS.3 HRS.2 LAB HRS." },


{ change1: "CHE 118", change2: "Fundamentals of Chemistry", change3: "4 CRS.3 HRS.2 LAB HRS." },


{ change1: "CHE 120", change2: "Fundamentals of Organic Chemistry", change3: "4 CRS.3 HRS.3 LAB HRS." },


{ change1: "CHE 121", change2: "Fundamentals of General, Organic & Biological Chemistry I", change3: "4 CRS.3 HRS.3 LAB HRS." },


{ change1: "CHE 122", change2: "Fundamentals of General, Organic & Biological Chemistry II", change3: "4 CRS.3 HRS.3 LAB HRS." },


{ change1: "CHE 125", change2: "Fundamentals of Biochemistry", change3: "4 CRS.3 HRS.3 LAB HRS." },


{ change1: "CHE 201", change2: "College Chemistry I", change3: "4 CRS.4 HRS.3 LAB HRS." },


{ change1: "CHE 202", change2: "College Chemistry II", change3: "4 CRS.4 HRS.3 LAB HRS." },


{ change1: "CHE 205", change2: "Quantitative Analysis", change3: "4 CRS.3 HRS.4 LAB HRS." },


{ change1: "CHE 230", change2: "Organic Chemistry I", change3: "5 CRS.3 HRS.4 LAB HRS." },


{ change1: "CHE 240", change2: "Organic Chemistry II", change3: "5 CRS.3 HRS.4 LAB HRS." },


{ change1: "ENV 250", change2: "Environmental Science", change3: "4 CRS.3 HRS.3 LAB HRS." },


{ change1: "ESC 111", change2: "Elements of Engineering Design", change3: "1 CRS.3 LAB HRS." },


{ change1: "ESC 113", change2: "Computer Aided Analysis for Engineering", change3: "2 CRS.1 HRS.2 LAB HRS." },


{ change1: "ESC 130", change2: "Engineering Graphics", change3: "2 CRS.1 HRS.3 LAB HRS." },


{ change1: "ESC 131", change2: "Engineering Graphics - AutoCAD", change3: "2 CRS.4 HRS." },


{ change1: "ESC 200", change2: "Engineering Mechanics", change3: "4 CRS.4 HRS." },


{ change1: "ESC 201", change2: "Engineering Mechanics I", change3: "3 CRS.2 HRS.3 LAB HRS." },


{ change1: "ESC 202", change2: "Engineering Mechanics II", change3: "3 CRS.2 HRS.3 LAB HRS." },


{ change1: "ESC 211", change2: "Thermodynamics I", change3: "3 CRS.4 HRS." },


{ change1: "ESC 221", change2: "Circuits and Systems I", change3: "4 CRS.6 HRS." },


{ change1: "ESC 223", change2: "Switching Systems and Logic Design", change3: "3 CRS.2 HRS.5 LAB HRS." },


{ change1: "GLY 210", change2: "General Physics Theory", change3: "4 CRS.3 HRS.3 LAB HRS." },


{ change1: "PHY 108", change2: "General Physics Experiments", change3: "3 CRS.3 HRS." },


{ change1: "PHY 109", change2: "General Physics", change3: "3 CRS.1 HRS.2 LAB HRS." },


{ change1: "PHY 110", change2: "Physics I", change3: "4 CRS.3 HRS.2 LAB HRS." },


{ change1: "PHY 210", change2: "University Physics I", change3: "4 CRS.4 HRS.2 LAB HRS." },


{ change1: "PHY 215", change2: "Physics II", change3: "4 CRS.4 HRS.2 LAB HRS." },


{ change1: "PHY 220", change2: "Geology I", change3: "4 CRS.4 HRS.2 LAB HRS." },


{ change1: "PHY 225", change2: "University Physics II", change3: "4 CRS.4 HRS.2 LAB HRS." },


{ change1: "PHY 240", change2: "Modern Physics", change3: "3 CRS.4 HRS." },


{ change1: "PHY 400", change2: "The Physics of Music", change3: "4 CRS.3 HRS.2 LAB HRS." },


{ change1: "SCI 111", change2: "Explorations In Scientific Mathematical (Same as MAT 111)", change3: "3 CRS.4 HRS." },


{ change1: "SCI 120", change2: "Computer Methods in Science", change3: "4 CRS.3 HRS.2 LAB HRS." },


{ change1: "SCI 121", change2: "Computer Methods in Science (Pascal)", change3: "4 CRS.3 HRS.2 LAB HRS." },


{ change1: "SCI 140", change2: "Introduction to Microprocessors", change3: "4 CRS.3 HRS.2 LAB HRS." },


{ change1: "SCI 150", change2: "Nutrition", change3: "3 CRS.3 HRS." },


{ change1: "SCI 151", change2: "The Science of Food", change3: "3 CRS.2 HRS.2 LAB HRS." },


{ change1: "SCI 410", change2: "Man and Environment", change3: "3 CRS.3 HRS." },


{ change1: "SCI 430", change2: "Scientific Instrumentation", change3: "4 CRS.2 HRS.4 LAB HRS." },


{ change1: "SCI 510", change2: "Pathophysiology", change3: "3 CRS.3 HRS." },


{ change1: "SCI 530", change2: "Pharmacology", change3: "3 CRS.3 HRS." }

]

let InputDepartment2 = "";

for (let i = 0; i < department2.length; i++) {
    InputDepartment2 += `<li>${department2[i].change1}&nbsp ${department2[i].change2}&nbsp${department2[i].change3} </li>`
}

document.getElementById("dep2").innerHTML = InputDepartment2;