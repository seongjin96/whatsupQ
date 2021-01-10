var express = require('express');
var router = express.Router();

var Product = require('../../../schemas/product');
var Package = require('../../../schemas/package');
var Themebox = require('../../../schemas/themebox');

/*
// 정기 배송 상품인 상품 데이터 넣기
router.post('/product/regular', async (req, res) => {
    try {
        const csv = `category1	category2	name	content	price	sale_ratio	main_img	content_img							
        생수/음료	요리	삼다수	제주 삼다수 2L 1set(12개)	15800 	10 	제주 삼다수 2L 	상품정보 삼다수 2L							
        생수/음료	요리	삼다수	제주 삼다수 500ml 1set(40개)	22000 	7 	제주 삼다수 500ml	상품정보 삼다수 500ml							
        생수/음료	요리	웅진	"빅토리아 탄산수 레몬, 플레인 500ml 1set(40개)"	18900 	10 	"빅토리아 탄산수 레몬, 플레인"	상품정보 빅토리아 탄산수 레몬 플레인 500ml							
        생수/음료	요리	동아 오츠카 	포카리 스웨트 340ml 1set(24개)	15200 	10 	포카리 스웨트 340ml 	상품정보 포카리 스웨트 캔 340ml							
        생수/음료	요리	CALA TOCS	오리지널 깔라만시 클렌즈 100ml 1set(30포)	29900 	7 	오리지널 깔라만시 클렌즈 	상품정보 오리지널 깔라만시 클렌즈 100ml							
        생수/음료	요리	디악 	콜드브루 더치커피 3종 500ml 1set(3개)	15500 	10 	콜드브루 더치커피 	상품정보 콜드브루 더치커피 3종							
        생수/음료	요리	아임얼라이브 	유기농 콤부차 4종 315ml 1set(4병)	15200 	10 	유기농 콤부차 4종 세트	상품정보 유기농 콤부차 4종							
        청소용품	청소	리벤스 	사선 컷팅 돌돌이 세트 돌돌이 1개 거치대 1개 테이프 10개 1set(리필 10개)	13450 	10 	사선 컷팅 돌돌이 세트	상품정보 리벤스 사선컷팅 테이프 크리너							
        청소용품	청소	3M	막대 걸레 청소 세트 표준형 막대걸레 1개 물걸레청소포 30매 정전기청소포 60매 1set (본체 + 30매?60매)	24620 	7 	막대 걸레 청소 세트	상품정보 막대 걸레 청소세트							
        청소용품	청소	홈스타 먼지를부탁해 	먼지 털이 세트 본체 1개 청소포 26개 1set (본체 + 패드 26개)	19800 	10 	먼지 털이 세트	상품정보 홈스타 먼지털이 세트							
        청소용품	청소	바스프사 	라이프웨어 청소블럭세트 집게 1개 블록 50개 1box(50개)	9500 	10 	라이프웨어 청소블럭세트	상품정보 라이프웨어 청소블럭세트							
        청소용품	청소	기본에	먼지떨이 더스트키퍼 세트 핸디스틱 1개 흡착패드30매 1set (본체 + 패드 30개)	23500 	7 	먼지떨이 더스트키퍼 세트	상품정보 기본에 더스트키퍼 먼지떨이							
        청소용품	청소	윈클리니 	"유리창 청소 도구 세트 본체 1개 패드 2p 찍찍이 3개 추락방지 안전집게+끈 1set (본체 + 패드 2개 찍찍이 3개 + 추락방지 안전집게, 끈)"	15900 	10 	유리창 청소 도구 세트	상품정보 윈클리니 유리창 청소 세트							
        청소용품	청소	COLOCOLO 	테이프크리너 돌돌이 세트 본체 1개 12m 롤 6개1set (본체 + 롤 6개)	17900 	10 	테이프크리너 돌돌이 세트	상품정보 테이프크리너 돌돌이 세트							
        세제/섬유유연제	옷관리	레인보우샵	천연 섬유유연제 1L 	6820 	10 	천연 섬유유연제 1L 1개	상품정보 천연섬유 유연제 구연산							
        세제/섬유유연제	옷관리	다우니 	엑스퍼트 실내건조 섬유유연제 1L 	6990 	10 	엑스퍼트 실내건조 섬유유연제 1L 1개	상품정보 다우니 엑스퍼트 실내건조 섬유유연제							
        세제/섬유유연제	옷관리	알마카비오	플라워 향 섬유유연제 1L 	10400 	10 	플라워 향 섬유유연제 1L 1개	상품정보 알마카비오 천연 섬유유연제 플라워향							
        세제/섬유유연제	옷관리	살림백서 	1+1 천연 액체 세탁세제 2L	11900 	10 	천연 액체 세탁세제 2L	상품정보 살림백서 액체세제							
        세제/섬유유연제	옷관리	비트 	일반세탁기 액체세제 3L 	9400 	10 	일반세탁기 액체세제 3L 1개	상품정보 비트 액체세제 3L							
        세제/섬유유연제	옷관리	퍼실	파워젤 드럼용 액상세제 1.5L 	6970 	10 	파워젤 드럼용 액상세제 1.5L 1개	상품정보 퍼실 드럼용 세탁세제 1.5L							
        세제/섬유유연제	옷관리	프로닥스 	1장 세탁 종이세제 시트지 15매 	4600 	10 	1장 세탁 종이세제 시트지 15매 1팩	상품정보 프로닥스 시트세제 더블액션 일반용 15매							
        주방용품	청소	공백 	매일 쓰는 주방세제 400ml 	7900 	10 	공백 매일 쓰는 주방세제 본품	상품정보 공백 매일쓰는 주방세제							
        주방용품	청소	살림백서 	1+1 천연 주방세제 1L 	13900 	10 	살림백서 천연 주방세제 1L 1종 주방세제	상품정보 살림백서 천연주방세제							
        주방용품	청소	오늘습관 	1+1 찌든때클리너 180g	17400 	10 	오늘습관 찌든때클리너	상품정보 오늘습관 찌든때클리너							
        주방용품	청소	헤이즐 	양면 수세미 세트 총 5개 	5500 	10 	헤이즐 양면 수세미 세트 12P 모노톤	상품정보 헤이즐 양면수세미 세트							
        주방용품	청소	[3M] 	철 수세미 세트 35g 3개	5380 	10 	[3M] 철 수세미	상품정보 살림백서 천연주방세제							
        주방용품	청소	홈스웰 	1+1 기모고무장갑 중 사이즈	5500 	10 	홈스웰 기모고무장갑	상품정보 홈스웰 기모고무장갑							
        주방용품	청소	크린랩 	고무장갑 대 사이즈 총 5개	10200 	10 	크린랩 고무장갑 대	상품정보 크린랩 고무장갑							
        욕실용품	수면	닥터방기원 	여성용 볼륨 퍼퓸 탈모케어 3종 샴푸500ml 트리트먼트500ml 에센스120ml 세트	29800 	7 	닥터방기원 여성용	상품정보 닥터방기원 여성용 볼륨 퍼퓸 탈모케어 세트							
        욕실용품	수면	아모레퍼시픽 	려 자양윤모 지성 샴푸 400ml 3개	20200 	7 	려 자양윤모 지성 샴푸	상품정보 려 자양윤모 탈모증상케어 샴푸 지성두피용 400ml							
        욕실용품	수면	닥터홍 	화이트케어 미백치약 100g 2개	17000 	10 	닥터홍 화이트케어 치약	상품정보 화이트케어 미백치약 100g							
        욕실용품	청소	홈스타 맥스 	세면대 배수관 클리너 230ml 	13000 	10 	세면대 배수관 클리너	상품정보 홈스타 맥스 세면대 배수관 클리너 230ml							
        욕실용품	청소	데톨 	포밍 핸드워시 애플블라썸 250ml 	6390 	10 	데톨 포밍 핸드워시 애플블라썸	상품정보 데톨 핸드워시 애플 블로썸 250ml							
        욕실용품	수면	순수연구소	1+1 딥 포어 클렌징폼 150ml 2개	23320 	7 	순수연구소 모공맑음	상품정보 모공맑음 딥 포어 클렌징폼 150ml							
        욕실용품	청소	자연봄	좁쌀여드름 천연비누 100g 	10000 	10 	자연봄 좁쌀여드름 오일 천연비누 100g	상품정보 좁쌀여드름 자연봄 천연비누 100g							
        디퓨저/탈취제	옷관리	P&G	페브리즈 섬유탈취제 상쾌한 향 370ml 2개	12000 	10 	페브리즈 섬유탈취제 상쾌한 향 370ml 2개	상품정보 페브리즈 섬유탈취제 상쾌한 향 370ml 2개							
        디퓨저/탈취제	옷관리	디노보 	굿베딩 섬유탈취제 500ml 2개	30800 	7 	굿베딩 섬유탈취제 500ml 2개	상품정보 굿베딩 섬유탈취제 500ml 2개							
        디퓨저/탈취제	인테리어	아르망 	프리저브드 플라워 디퓨저 로즈마리 향 100ml 	24000 	7 	프리저브드 플라워 디퓨저 로즈마리 향 100ml 1개	상품정보 프리저브드 플라워 디퓨저 로즈마리 향 100ml 1개							
        디퓨저/탈취제	인테리어	P&G	부착형 화장실 용 본체 상쾌한 하늘 향 5.5ml 	13500 	10 	부착형 화장실 용 본체 상쾌한 하늘 향 5.5ml 1개	상품정보 부착형 화장실 용 본체 5.5ml							
        디퓨저/탈취제	인테리어	로드로즈	스위트 가든 플라워 디퓨저 레몬라벤더 향 100ml 	19900 	10 	스위트 가든 플라워 디퓨저 레몬라벤더 향 100ml 1개	상품정보 스위트 가든 플라워 디퓨저 레몬라벤더 향 100ml 1개							
        디퓨저/탈취제	수면	아로마랩 	"27허브오일 (세탁오일, 싱크대오일, 욕실오일 용) 5ml "	15000 	10 	27허브오일 세탁오일 싱크대오일 욕실오일용 5ml 1개	상품정보 27허브오일 5ml 1개							
        디퓨저/탈취제	인테리어	로드로즈	라벤더 디퓨저 하루 복숭아 향 100ml 	18900 	10 	라벤더 디퓨저 하루 복숭아 향 100ml 1개	상품정보 라벤더 디퓨저 하루 복숭아 향 100ml 1개							
        휴지/물티슈	청소	크리넥스	디럭스 신수성 미용티슈 250매 6개	21010 	7 	크리넥스 디럭스 신수성 미용티슈 250매 6개	상품정보 크리넥스 디럭스 신수성 미용티슈 250매							
        휴지/물티슈	청소	깨끗한나라	소프티 각티슈 250매 6개	18900 	10 	소프티 각티슈 250매 6개	상품정보 깨끗한나라 소프티 각티슈 250매							
        휴지/물티슈	청소	미엘물티슈 	베이직 물티슈 클래식 100매 20팩	20900 	7 	베이직 물티슈 클래식 100매 20팩	상품정보 미엘 베이직 물티슈 클래식 100매							
        휴지/물티슈	청소	베베숲	시그니쳐 물티슈 캡형 70매 10팩	19900 	10 	베베숲 시그니쳐 물티슈 캡형 70매 10팩	상품정보 베베숲 시그니쳐 물티슈 캡형 70매							
        휴지/물티슈	청소	그린터치	물티슈 캡형 100매 10개	10850 	10 	물티슈 캡형 100매 10개	상품정보 그린터치 물티슈 100매							
        휴지/물티슈		크리넥스 	데코앤소프트 3겹 프리미엄화장지 30m 24롤	18300 	10 	데코앤소프트 3겹 프리미엄화장지 30m 24롤	상품정보 데코앤소프트  3겹 프리미엄 화장지 24롤							
        휴지/물티슈		크리넥스 	도톰한 3겹 카카오 화장지 27m 12롤	13410 	10 	도톰한 3겹 카카오 화장지 27m 12롤	상품정보 크리넥스 도톰한 카카오프렌즈 3겹 27M 6롤
        뷰티/미용		이니스프리	세이프 미 릴리프 모이스처 클렌징 폼 150ml	15000 	10 	세이프 미 릴리프 모이스처 클렌징 폼 150ml_메인	세이프 미 릴리프 모이스처 클렌징 폼 150ml_상세정보
        뷰티/미용		이니스프리	블루베리 리밸런싱 5.5 클렌저 100mLx2	9900 	10 	블루베리 리밸런싱 5.5 클렌저 100mLx2_메인	블루베리 리밸런싱 5.5 클렌저 100mLx2_상세정보
        뷰티/미용	수면	메디힐	메디힐 마스크팩 EX 10팩	7100 	10 	메디힐 마스크팩 EX 10팩_메인	메디힐 마스크팩 EX 10팩_상세정보
        뷰티/미용		AHC	ahc선스틱 내추럴 퍼펙션 프레쉬 선스틱14gx2	13900 	10 	ahc선스틱 내추럴 퍼펙션 프레쉬 선스틱14gx2_메인	ahc선스틱 내추럴 퍼펙션 프레쉬 선스틱14gx2_상세정보
        뷰티/미용		DrG	닥터지 그린 마일드업 선크림 50ml	17900 	10 	닥터지 그린 마일드업 선크림 50ml_메인	닥터지 그린 마일드업 선크림 50ml_상세정보
        뷰티/미용	수면	Lioele	블랙 헤드 제로 코팩 SET(5매)	4900 	10 	블랙 헤드 제로 코팩 SET(5매)_메인	블랙 헤드 제로 코팩 SET(5매)_상세정보
        뷰티/미용		도루코	도루코 페이스6 면도기(본체1+교체날4개)	11800 	10 	도루코 페이스6 면도기(본체1+교체날4개)_메인	도루코 페이스6 면도기(본체1+교체날4개)_상세정보`

        //var csv is the CSV file with headers
        function csvJSON(csv) {
            var lines=csv.split("\n");
        
            var result = [];
        
            var headers=lines[0].trim().split("\t");
            console.log(headers);
        
            for(var i = 1; i < lines.length; i++){
                var obj = {};
                var currentline=lines[i].trim().split("\t");
        
                for(var j=0;j<headers.length;j++){
                    obj[headers[j]] = currentline[j];
                }
                result.push(obj);
            }
            
            //return result; //JavaScript object
            return result; //JSON
        }
        
        const dataset = csvJSON(csv);
        console.log('데이터셋 : ', dataset);
        console.log('데이터셋 길이 : ', dataset.length);


        for (let i = 0; i < dataset.length; i++) {
            let price = Number(dataset[i].price.replace(/(\s*)/g, ""));
            let sale_ratio = Number(dataset[i].sale_ratio.replace(/(\s*)/g, ""));
            const product = new Product({
                name: dataset[i].name.trim().replace(/\"/gi, ""),
                content: dataset[i].content.trim().replace(/\"/gi, ""),
                main_img: 'https://s3.ap-northeast-2.amazonaws.com/sopt.seongjin.com/' + dataset[i].main_img.trim().replace(/\"/gi, "").replace(/\s/g, '+') + '.png',
                content_img: 'https://s3.ap-northeast-2.amazonaws.com/sopt.seongjin.com/' + dataset[i].content_img.trim().replace(/\"/gi, "").replace(/\s/g, '+') + '.png',
                price,
                sale_ratio,
                saled_price: Math.round((price * (100 - sale_ratio) / 100) * 0.01) * 100,
                category: [dataset[i].category1.replace(/(\s*)/g, ""), dataset[i].category2.replace(/(\s*)/g, "")]
            })
            const product_save_result = await product.save();
            console.log(i + 1, '번째 데이터 삽입');
        }
        console.log('데이터 삽입 완료');
        res.status(200).json({"메시지": "데이터 삽입 완료"});
    }
    catch (err) {
        console.log(err);
        res.status(200).json(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    } 
});
*/
// 테마박스 상품인 상품 데이터 넣기
router.post('/product/themebox', async (req, res) => {
    try {
        const csv = `category1	category2	price	img1	img2	img3	img4
        혼밥	먹는 것	18900	테마박스 혼밥 1-1	테마박스 혼밥 1-2	테마박스 혼밥 1-3	테마박스 혼밥 1-4 장바구니
        혼밥	먹는 것	30900	테마박스 혼밥 2-1	테마박스 혼밥 2-2	테마박스 혼밥 2-3	테마박스 혼밥 2-4 장바구니
        혼술	먹는 것	38000	테마박스 혼술 1-1	테마박스 혼술 1-2	테마박스 혼술 1-3	테마박스 혼술 1-4 장바구니
        혼술	먹는 것	21900	테마박스 혼술 2-1	테마박스 혼술 2-2	테마박스 혼술 2-3	테마박스 혼술 2-4 장바구니
        혼술	먹는 것	51900	테마박스 혼술 3-1	테마박스 혼술 3-2	테마박스 혼술 3-3	테마박스 혼술 3-4 장바구니
        매니아	인테리어	10500	테마박스 매니아 1-1	테마박스 매니아 1-2	테마박스 매니아 1-3	테마박스 매니아 1-4 장바구니
        매니아	인테리어	45000	테마박스 매니아 2-1	테마박스 매니아 2-2	테마박스 매니아 2-3	테마박스 매니아 2-4 장바구니
        매니아	인테리어	18900	테마박스 매니아 3-1	테마박스 매니아 3-2	테마박스 매니아 3-3	테마박스 매니아 3-4 장바구니
        문화		48000	테마박스 문화 1-1	테마박스 문화 1-2	테마박스 문화 1-3	테마박스 문화 1-4 장바구니
        19+	수면	32000	테마박스 19+ 1-1	테마박스 19+ 1-2	테마박스 19+ 1-3	테마박스 19+ 1-4
        반려동물		49000	테마박스 반려동물 1-1	테마박스 반려동물 1-2	테마박스 반려동물 1-3	테마박스 반려동물 1-4 장바구니
        반려동물		12000	테마박스 반려동물 2-1	테마박스 반려동물 2-2	테마박스 반려동물 2-3	테마박스 반려동물 2-4 장바구니`

        //var csv is the CSV file with headers
        function csvJSON(csv) {
            var lines = csv.split("\n");

            var result = [];

            var headers = lines[0].trim().split("\t");
            console.log(headers);

            for (var i = 1; i < lines.length; i++) {
                var obj = {};
                var currentline = lines[i].trim().split("\t");

                for (var j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentline[j];
                }
                result.push(obj);
            }

            //return result; //JavaScript object
            return result; //JSON
        }

        const dataset = csvJSON(csv);
        console.log('데이터셋 : ', dataset);
        console.log('데이터셋 길이 : ', dataset.length);

        for (let i = 0; i < dataset.length; i++) {
            let price = Number(dataset[i].price.replace(/(\s*)/g, ""));
            const themebox = new Themebox({
                img: ['https://s3.ap-northeast-2.amazonaws.com/sopt.seongjin.com/' + dataset[i].img1.trim().replace(/\"/gi, "").replace(/\s/g, '+') + '.png',
                'https://s3.ap-northeast-2.amazonaws.com/sopt.seongjin.com/' + dataset[i].img2.trim().replace(/\"/gi, "").replace(/\s/g, '+') + '.png',
                'https://s3.ap-northeast-2.amazonaws.com/sopt.seongjin.com/' + dataset[i].img3.trim().replace(/\"/gi, "").replace(/\s/g, '+') + '.png',
                'https://s3.ap-northeast-2.amazonaws.com/sopt.seongjin.com/' + dataset[i].img4.trim().replace(/\"/gi, "").replace(/\s/g, '+') + '.png'],
                price,
                category: [dataset[i].category1.replace(/(\s*)/g, ""), dataset[i].category2.replace(/(\s*)/g, "")]
            })
            const themebox_save_result = await themebox.save();
            console.log(i + 1, '번째 데이터 삽입');
        }
        console.log('데이터 삽입 완료');
        res.status(200).json({ "메시지": "데이터 삽입 완료" });
    }
    catch (err) {
        console.log(err);
        res.status(200).json(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
});
/*
// 패키지에 속해있는 상품 데이터 넣기
router.post('/product/package', async (req, res) => {
    try {
        const csv = `name	category	price	main_img
        화장품 정리대 보관 수납함		10000 	화장품 정리대 보관 수납함
        손톱깎이 세트		4900 	손톱깎이 세트
        귀걸이 보관함		6900 	귀걸이 보관함
        접이식 다용도 폴딩 리빙박스	인테리어	37900 	접이식 다용도 폴딩 리빙박스
        마이룸 자석형 우산꽂이	인테리어	7900 	마이룸 자석형 우산꽂이
        "충전식 전기 모기, 파리채(KC 인증)"	청소	16000 	"충전식 전기 모기, 파리채 KC 인증"
        신일 싸이클론 스틱 청소기	청소	47000 	신일 싸이클론 스틱 청소기
        파테크 고데기		20000 	파테크 고데기
        파테크 헤어드라이기		18000 	파테크 헤어드라이기
        "멀티 탭 세트(3구 1개, 4구 1개, 5구 1개 2.5M)"	인테리어	8800 	멀티 탭 세트
        슬림 양면 밸크로타이 밸크로 전선정리 검정 10m	인테리어	10000 	양면 밸크로 전선정리 검정 10m
        규조토 발 매트(M 사이즈)	청소	14900 	규조토 발 매트
        방수 목욕바구니	청소	5900 	방수 목욕바구니
        미끄럼방지 화장실 슬리퍼	청소	4500 	미끄럼방지 화장실 슬리퍼
        "화장실 청소 3종 세트(뚫어뻥, 변기솔, 바닥솔)"	청소	21900 	욕실청소용 브러쉬 5종 세트
        "화장실 휴지통(스테인리스, 6.5L)"	청소	9900 	화장실 휴지통
        "다용도 걸이(칫솔, 치약, 면도기)"	청소	12900 	다용도 걸이
        실리콘 냄비받침	요리	8000 	실리콘 냄비받침
        코렐코디네이츠 핸드크래프트 젠 1인 세라믹수저세트	요리	9140 	코렐코디네이츠 핸드크래프트 젠 1인 세라믹수저세트
        1인 식기 세트	요리	30000 	예인도예 도라지 1인 식기 세트
        "1인 조리용 냄비세트(16cm 후라이펜, 16cm 스테인 냄비 1개)"	요리	25000 	1인 조리용 냄비세트
        핸디 손잡이 2P (실리콘 냄비 핸디)	요리	5400 	핸디 손잡이 2P 
        "부엌 칼 주방세트 (과도, 칼, 식칼, 껍질깍이 등)"	요리	9900 	부엌 칼 주방세트 
        음식물 쓰레기통	요리	7000 	음식물 쓰레기통
        "이불패드세트 여름 1set (이불, 침대패드 SS사이즈)"	수면	50000 	여름이불 세트 회색
        "이불패드세트 겨울 1set (이불, 침대패드 SS사이즈)"	수면	62930 	겨울이불 세트 회색
        "베개세트 2개(베개 2개, 커버 2개 40cm x 60cm)"	수면	32000 	베게세트
        스탠딩 전신거울	인테리어	27000 	스탠딩 전신거울
        푹신한 실내화	인테리어	4900 	푹신한 실내화
        DIY 사다리 선반	인테리어	18900 	DIY 사다리 선반
        다미 대형접이식테이블	인테리어	19900 	다미 대형접이식 테이블
        접이식 3단 분리수거함(봉투는 따로 사셔야 해요)	청소	8900 	접이식 3단 분리수거함
        "빗자루, 쓰레받기 세트 "	청소	11000 	빗자루 쓰레받이 세트
        걸레 필요 없는 미리 밀대걸레	청소	19800 	걸레 필요 없는 미리 밀대걸레
        [돌체구스토] 캡슐 커피머신 조비아(JOVIA)	인테리어	129000 	돌체구스토 캡슐 커피머신 조비아
        리비 믹싱컵 아이스 아메리카노잔 473ml	인테리어	3900 	리비 믹싱컵 아이스 아메리카노잔 473ml
        구어메이 시리얼 머그컵 (머그잔 커피잔)	인테리어	9800 	구어메이 시리얼 머그컵
        [코스타노바] 노바 그레이 18cm 디저트접시	인테리어	12000 	노바 그레이 18cm 디저트접시
        프랑프랑 style 버터플라이 티스푼 티포크1set 은색	인테리어	10000 	버터플라이 티스푼 티포크 1세트
        H.jin 브이너 스텐레스양식기 3종세트/스푼포크나이프	요리	9800 	스텐레스양식기 3종세트 스푼포크나이프
        플렛 브런치 접시	요리	16000 	플렛 브런치 접시
        올리비아 원형볼 파스타접시 메인접시 샐러드볼 샐러드접시 시리얼볼 	요리	9300 	올리비아 원형볼 파스타접시
        리비 하이볼쥬스잔 310ml 	요리	3000 	리비 하이볼 쥬스잔
        루센트 와인잔 2p세트(중)	요리	8840 	루센트 와인잔 2p세트
        보아스 토스터기 VO-PT01	요리	49900 	보아스 토스터기 VO-T01
        브레스 단 스탠드 셀프인테리어 거실 침실 스탠드	수면	31000 	브레스 단 스탠드
        이상민 호텔식 프리미엄 기절베딩 토퍼세트+베개세트 SS 회색	수면	129000 	이상민 호텔식 프리미엄 기절베딩 토퍼세트 베개세트 SS
        쿨링 시어서커 지그재그 그레이 여름차렵이불 + 드리밍 스트라이프 차렵이불	수면	95800 	여름 겨울 이불세트 SS 사이즈
        붙이는 암막 블라인드 종이 접착식 셀프 창문 가리개 검은색 	수면	7000 	DIY 붙이는 암막 커튼
        미니 원룸책상 1인용 테이블 컴퓨터책상 세트(책상 + 의자) 검은색 	수면	57800 	1인용 테이블 컴퓨터책상세트 블랙
        LED 미니데스크 심플 램프 ? 블랙	수면	3500 	LED 미니데스크 심플 램프
        속옷용 세탁망	옷관리	2900 	속옷용 세탁망
        "일반 세탁망 (중형1, 대형1)"	옷관리	2900 	일반 세탁망
        빨래 건조대	옷관리	19000 	Y형 빨래 건조대
        빨래집게	옷관리	1900 	빨래 집게
        엉키지 않게 세탁볼	옷관리	2900 	세탁볼
        DIY 2단조절 행거	옷관리	25000 	DIY 2단조절 행거
        의류정리함 리빙박스 (56L+66L)	옷관리	15000 	리빙박스 56L 66L
        늘어남 방지용 플라스틱 옷걸이	옷관리	10000 	늘어남 방지 플라스틱 옷걸이
        DIY 5단 신발 정리대	옷관리	8000 	DIY 5단 신발 정리대
        "소가죽 목줄(산책용, 검은색)"		7000 	소가죽 재질 목줄
        "애완용 식기(물, 사료 2구, 스테인레스)"		19000 	애완용 식기
        사료계량컵(플라스틱)		6000 	사료계량컵
        "안전 애견 미용 가위 세트(일자가위 2개, 숱 가위 1개, 커브가위 1개)"		30000 	안전 애견 미용 가위 세트
        펫트너스 반영구 돌돌이 털청소		15000 	팻트너스
        "고양이 발톱깎이 세트(대 1개, 소 1개)"		8900 	고양이 발톱깎기 세트
        자취방 필수품 공구세트(수리의 달인)		20000 	자취필수 공구세트
        투톤 미니구급함 9종 약품		9900 	투톤 미니구급함 9종 약품
        여행용 복대지갑		4000 	여행용 복대지갑
        여행용 에어목베개		5500 	여행용 에어목베개
        캐리어 세트(캐리어 24인치 + 캐리어 커버)		57000 	"캐리어 세트 24인치 가방, 커버"
        캐리어 여행용 고급 파우치 7종 세트		7500 	캐리어 여행 고급 파우치 7종 세트 네이비
        "멀티 탭 세트(3구 1개, 4구 1개, 5구 1개 2.5M)"	인테리어	8800 	멀티탭 세트
        신뢰의 한일전자 국내생산 헤어드라이기	인테리어	18000 	한일전자 헤어드라이기
        Y형 빨래 건조대	인테리어	19000 	이케아 Y형 빨래건조대
        접이식 3단 분리수거함(봉투는 따로 사셔야 해요)	인테리어	8900 	접이식 3단 분리수거함
        DIY 2단조절 행거	인테리어	25000 	DIY 2단 조절 행거
        "1인 식기세트(밥공기, 국공기, 직사각접시, 컵, 수저 1개)"	인테리어	30000 	1인 식기세트`

        //var csv is the CSV file with headers
        function csvJSON(csv) {
            var lines=csv.split("\n");
        
            var result = [];
        
            var headers=lines[0].trim().split("\t");
            console.log(headers);
        
            for(var i = 1; i < lines.length; i++){
                var obj = {};
                var currentline=lines[i].trim().split("\t");
        
                for(var j=0;j<headers.length;j++){
                    obj[headers[j]] = currentline[j];
                }
                result.push(obj);
            }
            
            //return result; //JavaScript object
            return result; //JSON
        }
        
        const dataset = csvJSON(csv);
        console.log('데이터셋 : ', dataset);
        console.log('데이터셋 길이 : ', dataset.length);

        for (let i = 0; i < dataset.length; i++) {
            let price = Number(dataset[i].price.replace(/(\s*)/g, ""));
            let sale_ratio;
            if (price <= 20000) {
                sale_ratio = 10;
            } else if (price > 20000 && price <= 80000) {
                sale_ratio = 7;
            } else {
                sale_ratio = 5;
            };
            

            const product = new Product({
                name: dataset[i].name.trim().replace(/\"/gi, ""),
                main_img: 'https://s3.ap-northeast-2.amazonaws.com/sopt.seongjin.com/' + dataset[i].main_img.trim().replace(/\"/gi, "").replace(/\s/g, '+') + '.png',
                price,
                sale_ratio,
                saled_price: Math.round((price * (100 - sale_ratio) / 100) * 0.01) * 100,
                is_regular_product: false,
                is_package_product: true,
                category: [dataset[i].category.replace(/(\s*)/g, "")]
            })
            const product_save_result = await product.save();
            console.log(i + 1, '번째 데이터 삽입');
        }
        console.log('데이터 삽입 완료');
        res.status(200).json({"메시지": "데이터 삽입 완료"});
    }
    catch (err) {
        console.log(err);
        res.status(200).json(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    } 
})



/// 패키지 데이터 넣기
router.post('/package', async (req, res) => {
    try {
        const csv = `name	category1	category2	product1	product2	product3	product4	product5	product6	product7	main_img	price	sale_ratio
        뷰티 용품 보관하기	공간확보의 달인		화장품 정리대 보관 수납함	손톱깎이 세트	귀걸이 보관함					뷰티 용품 보관하기	21800 	7 
        아무거나 / 잡동사니 보관하기	공간확보의 달인	인테리어	접이식 다용도 폴딩 리빙박스	마이룸 자석형 우산꽂이						아무거나 잡동사니 보관하기	45800 	7 
        방도 청소하고 벌레도 치워버려	가전제품	청소	"충전식 전기 모기, 파리채(KC 인증)"	신일 싸이클론 스틱 청소기						방도 청소하고 벌레도 치워버려	63000 	7 
        찰랑이는 머릿결	가전제품		파테크 고데기	파테크 헤어드라이기						찰랑이는 머릿결	38000 	7 
        멀티 탭과 선 정리	가전제품	인테리어	"멀티 탭 세트(3구 1개, 4구 1개, 5구 1개 2.5M)"	슬림 양면 밸크로타이 밸크로 전선정리 검정 10m						멀티 탭과 선 정리	18800 	10 
        깔끔한 화장실	우리 집 관리	청소	규조토 발 매트(M 사이즈)	방수 목욕바구니	미끄럼방지 화장실 슬리퍼	"화장실 청소 3종 세트(뚫어뻥, 변기솔, 바닥솔)"	"화장실 휴지통(스테인리스, 6.5L)"	"다용도 걸이(칫솔, 치약, 면도기)"		깔끔한 화장실	70000 	7 
        방구석 Chef	우리 집 관리	요리	실리콘 냄비받침	코렐코디네이츠 핸드크래프트 젠 1인 세라믹수저세트	1인 식기 세트	"1인 조리용 냄비세트(16cm 후라이펜, 16cm 스테인 냄비 1개)"	핸디 손잡이 2P (실리콘 냄비 핸디)	"부엌 칼 주방세트 (과도, 칼, 식칼, 껍질깍이 등)"	음식물 쓰레기통	방구석 Chef	87830 	5 
        포근한 수면이 필요해	우리 집 관리	수면	"이불패드세트 여름 1set (이불, 침대패드 SS사이즈)"	"이불패드세트 겨울 1set (이불, 침대패드 SS사이즈)"	"베개세트 2개(베개 2개, 커버 2개 40cm x 60cm)"					포근한 수면이 필요해	144930 	5 
        우리 집에 필요해	우리 집 관리	인테리어	스탠딩 전신거울	푹신한 실내화	DIY 사다리 선반	다미 대형접이식테이블				우리 집에 필요해	70700 	7 
        취미는 청소입니다	우리 집 관리	청소	접이식 3단 분리수거함(봉투는 따로 사셔야 해요)	"빗자루, 쓰레받기 세트 "	걸레 필요 없는 미리 밀대걸레					취미는 청소입니다	39700 	7 
        집에서 커피한잔	홈카페	인테리어	[돌체구스토] 캡슐 커피머신 조비아(JOVIA)	리비 믹싱컵 아이스 아메리카노잔 473ml	구어메이 시리얼 머그컵 (머그잔 커피잔)	[코스타노바] 노바 그레이 18cm 디저트접시	프랑프랑 style 버터플라이 티스푼 티포크1set 은색			집에서 커피한잔	164700 	5 
        오늘은 집에서 브런치	홈카페	요리	H.jin 브이너 스텐레스양식기 3종세트/스푼포크나이프	플렛 브런치 접시	올리비아 원형볼 파스타접시 메인접시 샐러드볼 샐러드접시 시리얼볼 	리비 하이볼쥬스잔 310ml 	루센트 와인잔 2p세트(중)	보아스 토스터기 VO-PT01		오늘은 집에서 브런치	95940 	5 
        잠에만 집중하고 싶어	포근하게 자기	수면	브레스 단 스탠드 셀프인테리어 거실 침실 스탠드	이상민 호텔식 프리미엄 기절베딩 토퍼세트+베개세트 SS 회색	쿨링 시어서커 지그재그 그레이 여름차렵이불 + 드리밍 스트라이프 차렵이불					잠에만 집중하고 싶어	255800 	5 
        스르륵 잠드는 마법	포근하게 자기	수면	붙이는 암막 블라인드 종이 접착식 셀프 창문 가리개 검은색 	미니 원룸책상 1인용 테이블 컴퓨터책상 세트(책상 + 의자) 검은색 	LED 미니데스크 심플 램프 ? 블랙					스르륵 잠드는 마법	68300 	7 
        빨리 빨래하자	입는건 중요해	옷관리	속옷용 세탁망	"일반 세탁망 (중형1, 대형1)"	빨래 건조대	빨래집게	엉키지 않게 세탁볼			빨리 빨래하자	39400 	7 
        "옷, 신발도 집이 있다"	입는건 중요해	옷관리	DIY 2단조절 행거	의류정리함 리빙박스 (56L+66L)	늘어남 방지용 플라스틱 옷걸이	DIY 5단 신발 정리대				옷 신발도 집이 있다	58000 	7 
        멍멍 강아지를 위해서	반려동물과 함께		"소가죽 목줄(산책용, 검은색)"	"애완용 식기(물, 사료 2구, 스테인레스)"	사료계량컵(플라스틱)	"안전 애견 미용 가위 세트(일자가위 2개, 숱 가위 1개, 커브가위 1개)"	펫트너스 반영구 돌돌이 털청소			멍멍 강아지를 위해서	77000 	7 
        야옹 고양이를 위해서	반려동물과 함께		펫트너스 반영구 돌돌이 털청소	"애완용 식기(물, 사료 2구, 스테인레스)"	사료계량컵(플라스틱)	"고양이 발톱깎이 세트(대 1개, 소 1개)"				야옹 고양이를 위해서	48900 	7 
        "공구, 구급Box 준비해봤어"	특별기획		자취방 필수품 공구세트(수리의 달인)	투톤 미니구급함 9종 약품						"공구, 구급Box 준비해봤어"	29900 	7 
        떠나자 여행가자	특별기획		여행용 복대지갑	여행용 에어목베개	캐리어 세트(캐리어 24인치 + 캐리어 커버)	캐리어 여행용 고급 파우치 7종 세트				떠나자 여행가자	74000 	7 
        "첫 자취, 난 아무것도 몰라요"	특별기획	인테리어	"멀티 탭 세트(3구 1개, 4구 1개, 5구 1개 2.5M)"	신뢰의 한일전자 국내생산 헤어드라이기	Y형 빨래 건조대	접이식 3단 분리수거함(봉투는 따로 사셔야 해요)	DIY 2단조절 행거	"1인 식기세트(밥공기, 국공기, 직사각접시, 컵, 수저 1개)"		"첫 자취, 난 아무것도 몰라요"	109700 	5`

        //var csv is the CSV file with headers
        function csvJSON(csv) {
            var lines=csv.split("\n");
        
            var result = [];
        
            var headers=lines[0].trim().split("\t");
            console.log(headers);
        
            for(var i = 1; i < lines.length; i++){
                var obj = {};
                var currentline=lines[i].trim().split("\t");
        
                for(var j=0;j<headers.length;j++){
                    obj[headers[j]] = currentline[j];
                }
                result.push(obj);
            }
            
            //return result; //JavaScript object
            return result; //JSON
        }
        
        const dataset = csvJSON(csv);
        console.log('데이터셋 : ', dataset);
        console.log('데이터셋 길이 : ', dataset.length);


        for (let i = 0; i < dataset.length; i++) {
            let products = [];
            
            if (dataset[i].product1 !== "") {
                let data = await Product.find({
                    name: dataset[i].product1.trim().replace(/\"/gi, ""),
                });
                products.push(data[0]._id);
            }
            
            if (dataset[i].product2 !== "") {
                let data = await Product.find({
                    name: dataset[i].product2.trim().replace(/\"/gi, ""),
                });
                products.push(data[0]._id);
            }
            if (dataset[i].product3 !== "") {
                let data = await Product.find({
                    name: dataset[i].product3.trim().replace(/\"/gi, ""),
                });
                products.push(data[0]._id);
            }
            if (dataset[i].product4 !== "") {
                let data = await Product.find({
                    name: dataset[i].product4.trim().replace(/\"/gi, ""),
                });
                products.push(data[0]._id);
            }
            if (dataset[i].product5 !== "") {
                let data = await Product.find({
                    name: dataset[i].product5.trim().replace(/\"/gi, ""),
                });
                products.push(data[0]._id);
            }
            if (dataset[i].product6 !== "") {
                let data = await Product.find({
                    name: dataset[i].product6.trim().replace(/\"/gi, ""),
                });
                products.push(data[0]._id);
            }
            if (dataset[i].product7 !== "") {
                let data = await Product.find({
                    name: dataset[i].product7.trim().replace(/\"/gi, ""),
                });
                products.push(data[0]._id);
            }
            console.log('prudcts : ', products)

            let price = Number(dataset[i].price.replace(/(\s*)/g, ""));
            let sale_ratio = Number(dataset[i].sale_ratio.replace(/(\s*)/g, ""));

            const package = new Package({
                name: dataset[i].name.trim().replace(/\"/gi, ""),
                main_img: 'https://s3.ap-northeast-2.amazonaws.com/sopt.seongjin.com/' + dataset[i].main_img.trim().replace(/\"/gi, "").replace(/\s/g, '+') + '.png',
                price,
                sale_ratio,
                saled_price: Math.round((price * (100 - sale_ratio) / 100) * 0.01) * 100,
                category: [dataset[i].category1.replace(/(\s*)/g, ""), dataset[i].category2.replace(/(\s*)/g, "")],
                products
            })
            const product_save_result = await package.save();
            console.log(dataset[i]);
            console.log(i + 1, '번째 데이터 삽입');
            
        }
        console.log('데이터 삽입 완료');
        res.status(200).json({"메시지": "데이터 삽입 완료"});
    }
    catch (err) {
        console.log(err);
        res.status(200).json(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    } 
});*/


module.exports = router;