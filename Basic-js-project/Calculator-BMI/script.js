
const HumanWeight = document.getElementById('weight');
const HumanHeight = document.getElementById('height');
const calculate = document.getElementById('calculate')
const optionWeight = document.getElementById('option-weight')
const optionHeight = document.getElementById('option-height')

const CalculateBMI = () => {
    const weight = HumanWeight.value;
    const height = HumanHeight.value;
    const BMIWeight = document.getElementById('BMIWeight');
    const BMIHeight = document.getElementById('BMIHeight');
    const indexValue = document.getElementById('indexValue');
    const BMIResult = document.getElementById('BMIResult');
    const medical = document.getElementById('suggestion');
    const resultBox = document.getElementById('result-box');
    Object.assign(resultBox.style, {
        backgroundColor: '#75ff33',

    })
    Object.assign(indexValue.style, {
        color: 'red',
        fontSize: '40px',
        fontWeight: 700,
        margin: '10px',
        textDecoration: 'underline',
    });
    Object.assign(BMIWeight.style, {
        color: 'gray',
        fontSize: '30px',
        margin: '10px'
    })
    Object.assign(BMIHeight.style, {
        color: 'gray',
        fontSize: '30px',
        margin: '10px'
    })
    Object.assign(BMIResult.style, {
        color: 'white',
        fontSize: '40px',
        fontWeight: 700,
        margin: '10px',
        border: '3px solid red',
        backgroundColor: '#d433ff',
        textAlign: 'center',
        borderRadius: '10px',
        padding: '5px',
        boxShadow: '1px 1px 5px 5px white'
    })
    Object.assign(medical.style, {
        color: 'gray',
        fontSize: '18px',
        fontWeight: 700,
        margin: '10px'

    })

    let ConvertedWeightInKg;
    let ConvertedHeightInMeter;
    const OptionWeight = optionWeight.value;
    const OptionHeight = optionHeight.value;
    console.log(OptionWeight, OptionHeight)
    BMIWeight.innerText = ` Weight is : ${weight} ${OptionWeight}`
    BMIHeight.innerText = ` Height is : ${height} ${OptionHeight}`

    switch (OptionWeight) {
        case 'kilogram':
            ConvertedWeightInKg = weight;
            break;
        case 'gram':
            ConvertedWeightInKg = weight / 1000;
            break;
        case 'milligram':
            ConvertedWeightInKg = weight / 1000000;
            break;
        case 'pound':
            ConvertedWeightInKg = weight * 0.453592;
            break;
        case 'ounce':
            ConvertedWeightInKg = weight * 0.00220462;
            break;

        default:
            ConvertedWeightInKg = "Invalid weight"

    }

    switch (OptionHeight) {
        case 'meter':
            ConvertedHeightInMeter = height;
            break;
        case 'centimeter':
            ConvertedHeightInMeter = height / 100;
            break;
        case 'foot':
            ConvertedHeightInMeter = height * 0.3048;
            break;
        case 'inch':
            ConvertedHeightInMeter = height * 0.0254;
            break;
        default:
            ConvertedHeightInMeter = "Invalid hight"

    }
    if (!isNaN(ConvertedWeightInKg) && !isNaN(ConvertedHeightInMeter) && ConvertedWeightInKg > 0 && ConvertedHeightInMeter > 0) {

        const BMICalculate = ConvertedWeightInKg / (ConvertedHeightInMeter * ConvertedHeightInMeter);
        const Result = BMICalculate.toFixed(4);

        indexValue.innerText = `your Body Mass Index (BMI) : ${Result}`;
        console.log(`BMI : ${Result}`);
        if (Result < 16.0) {
            console.log(`UnderWEight (Severe thinness)`)
            BMIResult.innerText = `UnderWEight (Severe thinness)`
            medical.innerText = `Consult a doctor to check for underlying conditions like malabsorption, hyperthyroidism, or eating disorders.`;


        } else if (Result >= 16.0 && Result < 16.9) {
            BMIResult.innerText = `UnderWeight (Moderate thinness)`
            medical.innerText = `Check for underlying causes like poor digestion, thyroid issues, or deficiencies.  and Focus on strength exercises like weightlifting to build muscle instead of fat.`;


        } else if (Result > 17.0 && Result < 18.4) {
            BMIResult.innerText = `UnderWEight (Mild thinness)`
            medical.innerText = `Get enough sleep → 7–9 hours for proper metabolism & recovery.
            💧 Stay hydrated → But avoid drinking too much water before meals.
            🧘‍♂️ Reduce stress → Relaxing activities like meditation improve appetite.
            `;

        } else if (Result >= 18.5 && Result < 24.9) {
            BMIResult.innerText = `You are in the Normal`
            medical.innerText = `You're at a healthy weight, so focus on balanced eating, regular exercise, and good habits to stay fit and energetic! 💪🚀
            `;

        }
        else if (Result >= 25.0 && Result < 29.9) {
            BMIResult.innerText = `You are in the OverWeight (Pre-obese)`
            medical.innerText = `eing slightly overweight is manageable with small lifestyle changes. Focus on:
            ✅ Eating healthy, whole foods
            ✅ Staying active daily
            ✅ Getting enough sleep & managing stress
            `;

        } else if (Result >= 30.0 && Result < 34.9) {
            BMIResult.innerText = `You are in the Obese rangeObese (Class I)`
            medical.innerText = `You CAN lose weight safely and improve your health with small, consistent changes!           
            ✅ Focus on eating whole foods & reducing junk food
            ✅ Move your body daily (even light exercise counts!)
            ✅ Stay consistent—results take time, but they happen!
            `;

        } else if (Result >= 35.0 && Result < 39.9) {
            BMIResult.innerText = `You are in the Obese range (Class II)`
            medical.innerText = ` Focus on whole foods & portion control.
            ✅ Start with light movement & gradually increase activity.
            ✅ Stay consistent—small changes lead to big results!
            `;


        } else {
            BMIResult.innerText = `You are in the Obese range (Class III)`
            medical.innerText = `✅ Focus on whole foods & portion control.
            ✅ Start with gentle movement & gradually increase activity.
            ✅ Stay consistent—small, steady changes lead to lasting results!
            `;



        }

    } else {
        console.log('invalid error')
    }



}

calculate.addEventListener('click', () => {
    CalculateBMI();
    HumanWeight.value = ''
    HumanHeight.value = ''


})