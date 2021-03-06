
export class AppGlobal {

  public static pageNumberCases: number[] = [0,1]

  public static typeCases: string[] = [
    "gas_station",
    "atm",
    "bank",
    "bar",
    "restaurant",
    "cafe",
    "parking",
    "market",
    "hotel"
  ]

  public static textSearchCases: string[] = [
    // "Petrolimex",
    // "xăng dầu Việt Nam",
    // "xăng dầu quân đội",
    // "MIPECO",
    // "xăng dầu",
    // "đổ xăng",
    // "cây xăng",
    // "trạm xăng",
    // "quán sửa xe",
    // "sửa xe",
    // "honda",

    // "atm",
    // "ngân hàng",
    // "bank",
    // "viettinbank",
    // "vietcombank",
    // "tien phong",
    // "bank",
    // "techcombank",
    // "agribank",
    // "bidv",
    // "vib",
    // "acb",
    // "scb",
    // "mb bank",
    // "MB",
    // "sacombank",
    // "f88",
    // "cầm đồ",
    
    // "bún",
    // "bún bò",
    // "bún ngan",
    // "bún bò huế",
    // "bún trộn",
    // "bún đậu",
    // "bún đậu mắm tôm",
    // "bún lòng",
    // "bún cá",
    // "bún cá chấm",
    // "bún hải sản",
    // "bún dọc mùng",
    // "bún mọc",
    // "bún lòng",
    // "bún chó",
    // "bún ốc",
    // "bún sườn",

    // "phở bò",
    // "phở bò nam định",
    // "phở gà",
    // "phở cồ",
    // "mỳ vằn thắn",
    // "mỳ xào",
    // "cơm rang",
    // "cơm gà",
    // "cơm văn phòng",
    // "cơm bình dân",
    // "cơm rang dưa bò",
    // "cơm tấm",
    // "cơm tấm sườn",
    // "cơm thố",
    // "cháo lòng",
    // "cháo ếch singapore",
    // "nem nướng",
    // "nem nướng nha trang",
    // "hoàng bèo",
    // "cuốn roll",
    // "canh cua",
    // "cạnh ghẹ",
    // "súp cua",
    // "súp ghẹ",
    // "miến ghẹ",

    // "bánh mỳ",
    // "bánh mỳ chảo",
    // "bánh mỳ cay",
    // "bánh mỳ than",
    // "bakery",
    // "bánh mỳ chả",
    // "bánh mỳ heo quay",
    // "bánh mỳ thịt nướng",
    // "bánh sinh nhật",
    // "bánh kem",
    // "bánh su kem",
    // "bánh giò",
    // "bánh xèo",
    // "bánh khoai",
    // "bánh gối",
    // "bánh bột lọc",
    // "bánh tráng trộn",
    // "bánh tráng",
    // "bánh tráng nướng",
    // "bánh trung thu",
    // "bánh bao",
    // "bánh cuốn",

    // "lẩu",
    // "lẩu gà",
    // "lẩu ếch",
    // "lẩu hải sản",
    // "lẩu bò",
    // "lẩu bò nhúng nấm",
    // "lẩu wang",
    // "lẩu hadilao",
    // "lẩu phan",
    // "đức trọc",
    // "lẩu lòng bò",
    // "Hotpot",
    // "Taiwanese",
    // "Thái Lan",
    // "Yixin",
    // "Lẩu chua cay",
    // "ThaiExpress",
    // "thai deli",
    // "Lẩu Nấm",
    // "Ashima",
    // "Food Center",
    // "Buffet",
    // "Bò Nhúng Dấm",

    // "nướng",
    // "bbq",
    // "Sashimi BBQ",
    // "Sashimi",
    // "kfc",
    // "lotteria",
    // "gà kfc",
    // "mcdonald",
    // "jollibee",
    // "Nhật",
    // "đồ ăn Nhật",
    // "Hàn Quốc",
    // "đồ ăn Hàn Quốc",
    // "nhất nướng",
    // "đỉnh nướng",
    // "BBQ",
    // "Sochu",
    // "Vua nướng",
    // "King BBQ",
    // "Buk Buk",
    // "Restaurant",

    // "nhậu",
    // "thịt chó",
    // "thịt mèo",
    // "vịt quay",
    // "gà nướng",
    // "heo quay",
    // "gà không lối thoát",
    // "mạch hoạch",
    // "gà mạch hoạch",
    // "sữa dê",
    // "dê núi",
    // "trâu thui",
    // "bò",
    // "lòng chát",
    // "bia hơi",
    // "bia thu hằng",
    // "bia hải xồm",
    // "Bia tươi Tiệp GoldMalt",
    // "bia tươi Cientos",
    // "bia tươi Hoa Viên",
    // "Legend Beer",
    // "bia Tiệp Lạc Viên",
    // "Sparta Beer Club",
    // "piza",
    // "hamburger",

    // "hải sản tươi",
    // "hải sản tươi sống",
    // "hải sản",
    // "tôm",
    // "cua",
    // "cá",
    // "mực",
    // "tuộc",
    // "bề bề",
    // "ghẹ",
    // "chế biến hải sản",
    // "king crab",
    // "cua hoàng đế",
    // "tôm alaska",
    // "biển đông",
    // "hải sản quảng ninh",
    // "bến",
    // "cảng",
    // "chợ hải sản",

    // "nhà nghỉ",
    // "motel",
    // "nhà nghỉ bình dân",
    // "khách sạn",
    // "hotel",
    // "bar",
    // "club",
    // "pub",
    // "massage",
    // "tẩm quất",
    // "tẩm quất lành mạnh",
    // "karaoke",


    // "phòng khám",
    // "siêu âm",
    // "khám bệnh",
    // "x quang",
    // "nha khoa",
    // "tiệm kính",
    // "kính",
    // "đông y",
    // "tây y",
    // "cổ truyền",
    // "câu cá",
    // "thuyền tàu",
    // "chim",
    // "cò",
    
    // "cafe",
    // "coffee",
    // "coffe house",
    // "highland coffee",
    // "Starbucks",
    // "Trung Nguyên",
    // "Cộng Cà Phê",
    // "Phúc Long Coffee",
    // "Tea House",
    // "The Coffee Bean",
    // "Tea Leaf",
    // "Urban Station",
    // "Gemini Coffee",
    // "Milano Coffee",
    // "sinh tố",
    // "nước ép",
    // "nước hoa quả",

    // "Gong Cha",
    // "The Alley",
    // "Royaltea",
    // "The Milktea",
    // "Uncle Tea",
    // "Britea",
    // "DingTea",
    // "Đen đá",
    // "Hoktea",
    // "Teawan",
    // "trà thái",
    // "trà xanh",
    // "trà matcha",
    // "chè nam bộ",

    // "trà đá",
    // "sữa chua",
    // "sữa chua trân châu",
    // "sữa chua mai thỏ",
    // "sữa chua hạ long",
    // "cà phê trứng",
    // "trà chanh",
    // "tmore",
    // "Layla",
    // "Trà Chanh Tropic",
    // "Trà Chanh 1975",
    // "Chill",
    // "Trà Chanh Bụi Phố",
    // "Bụi Phố",
    // "bi a",
    // "Billiards",
    // "game",
    // "ps",
    // "game internet",
    // "quán net",
    // "tiệm net",
    // "cyber game",
    
    // "quần áo",
    // "quần áo nam",
    // "quần áo nữ",
    // "váy",
    // "giày",
    // "sneaker",
    // "shoes",
    // "Germe Shop",
    // "Méo shop",
    // "Daisy",
    // "Tony4men",
    // "May boutique",
    // "Lyra shop",
    // "Shop",
    // "Boutique",
    // "H2T",
    // "Play Boys",
    // "May",
    // "Pet Shop",
    // "May boutique",
    // "Adam Store",
    // "Aristino",
    // "Man",
    // "Kpis Clothes",
    // "Liberty",
    // "torano",

    // "chợ",
    // "tạp hoá",
    // "market",
    // "big C",
    // "Vin mart",
    // "Circle K",
    // "hoa quả",
    // "Klever Fruits",
    // "Fruit Garden",
    // "Garden",
    // "Fruit",
    // "thời trang",
    // "chợ đầu mối",
    // "chè",
    // "chè sài gòn",
    // "tiệm sách",
    // "bách hoá",
    // "nhà sách",  

    // "đá bóng",
    // "giày đá bóng",
    // "quần áo thể thao",
    // "quần áo đá bóng",
    // "tennis",
    // "bể bơi",
    // "sân bóng",
    // "cắt tóc",
    // "tiệm cắt tóc",
    // "Barber",
    // "Barber shop",
    // "PHONG BVB",
    // "liêm barber",
    // "30Shine",
    // "nhất kéo",
    // "sân golf",
    // "sân tennis",

    // "xe máy",
    // "ô tô",
    // "trường học",
    // "đại học",
    // "trung học",
    // "trung học phổ thông",
    // "tiểu học",
    // "mầm non",
    // "xe bus",
    // "trạm xe bus",
    // "trạm brt",
    // "chùa",
    // "bệnh viện",
    // "trạm y tế",
    // "hiệu thuốc",
    // "farmacity",
    // "chốt CSGT",
    // "nhà thờ",
    // "chùa",
    // "miếu",
    // "khu di tích",

    // "rạp chiếu phim",
    // "CGV",
    // "Vincom",
    // "Vin Home",
    // "school",
    // "nhà hàng",
    // "bánh cuốn",
    // "phụ kiện điện thoại",
    // "FPT",
    // "phụ kiện máy tính",
    // "máy tính",
    // "macbook",
    // "laptop",
    // "Viettel",
    // "bưu chính",
    // "Viettel Post",
    // "Giao hàng tiết kiệm",
    // "parking",
    // "chung cư",
    // "khu tập thể",
    // "quán ăn sáng",
    // "khu công nghiệp",
    // "cơ sở chế biến",
    // "nhà máy",
    // "xưởng kho",
    // "nhà văn hoá",
    // "cửa khẩu",
    
    // "bỉm sữa",
    // "sữa",
    // "baby",
    // "kids",
    // "pet shop",
    // "chó",
    // "mèo",
    // "kem",
    // "bít tết",
    // "steak",
    // "công viên",
    // "khu vui chơi",
    // "thiếu nhi",
    // "hồ",
    // "bảo tàng",
    // "di tích",
    // "khu du lịch",
    // "khu sinh thái",
    // "resort",
    // "goft",
    // "villar",
    // "sân vận động",
    // "gội đầu",
    // "cầu",
    // "nhà thờ",
    // "quân đội",
    // "công an",
    // "Sân bay",

    // "ga",
    // "xong nồi",
    // "cốc chén",
    // "đồ điện tử",
    // "media mart",
    // "vườn",
    // "vườn hoa",
    // "đồ gia dụng",
    // "nội thất",
    // "chăn ga",
    // "gối đệm",
    // "khu nghỉ dưỡng",
    // "hiệu thuốc",
    // "tiệm thuốc",
    // "uỷ ban",
    // "công an phường",
    // "trụ sở công an phường",
    // "khu đô thị",
    // "toà nhà",
    // "công nghệ",
    // "học viện",
    // "viện kiểm soát",
    // "địa điểm du lịch",
    // "khu vui chơi",
    // "giải trí",
    // "khu sinh thái",
    // "tiệm may",
    // "giặt là"
  ]

  public static locationCases: string[] = [
    "20.962205679032966, 105.76451531515468",
    "20.9959936921441, 105.81550544375123",
    "21.030277745745703, 105.79280148348815",
    "21.0681082061825, 105.76724789060421",
    "21.015692238066748, 105.76159080840793",
    "21.031672536810262, 105.85221833993232",
    "21.016950002133456, 105.82721762007488",
    "21.036119385155487, 105.82765772106471",
    "21.00969782918699, 105.85686219710597",
    "20.98623194416175, 105.86583423108173",
    "21.04122257286086, 105.89630856770316",
    "21.072394081188175, 105.82554037691794",
    "20.93192420213627, 105.8421158192665"
  ]
}