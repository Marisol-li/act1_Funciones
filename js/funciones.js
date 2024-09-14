function calculateTriangleArea() {
    const base = document.getElementById('base').value;
    const height = document.getElementById('height').value;
    const area = (base * height) / 2;
    document.getElementById('triangle-result').innerText = `Área: ${area}`;
}

function printPersonalData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    document.getElementById('personal-data-result').innerHTML = `
        <p>Nombre: ${name}</p>
        <p>Edad: ${age}</p>
        <p>Email: ${email}</p>
        <p>Teléfono: ${phone}</p>
        <p>Dirección: ${address}</p>
    `;
}

function calculateTotalSalary() {
    let totalSalary = 0;
    for (let i = 1; i <= 5; i++) {
        const salary = document.getElementById(`worker${i}`).value;
        totalSalary += parseFloat(salary);
    }
    document.getElementById('salary-result').innerText = `Total de Nómina: ${totalSalary}`;
}

function calculateStudentAverage() {
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const average = (subject1 + subject2 + subject3) / 3;
    document.getElementById('average-result').innerText = `Promedio: ${average.toFixed(2)}`;
}


window.onload = function() {
    const workersDiv = document.getElementById('trabajadores');
    for (let i = 1; i <= 5; i++) {
        const label = document.createElement('label');
        label.innerText = `Trabajor ${i} sueldo :`;
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `worker${i}`;
        input.required = true;
        workersDiv.appendChild(label);
        workersDiv.appendChild(input);
    }
}
