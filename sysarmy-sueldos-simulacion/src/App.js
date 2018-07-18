import React, { Component } from 'react';
import './App.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


class App extends Component {
  state = {
    'Me identifico': '',
    'Tengo': '',
    'Años de experiencia': '',
    '¿Cuánta?': '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <FormControl component="fieldset" required>
          <FormLabel component="legend">Me identifico</FormLabel>
          <RadioGroup
            aria-label="Me identifico"
            name="Me identifico"
            value={this.state['Me identifico']}
            onChange={this.handleChange}
          >
            <FormControlLabel value="Hombre" control={<Radio />} label="Hombre" />
            <FormControlLabel value="Mujer" control={<Radio />} label="Mujer" />
            <FormControlLabel value="Otros" control={<Radio />} label="Otros" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Tengo">Tengo</InputLabel>
          <Select
            value={this.state['Tengo']}
            onChange={this.handleChange}
            inputProps={{
              name: 'Tengo',
              id: 'Tengo',
            }}
          >
            <MenuItem value="Menos de 18 años">Menos de 18 años</MenuItem>
            <MenuItem value="18 - 20">18 - 20</MenuItem>
            <MenuItem value="21 - 23">21 - 23</MenuItem>
            <MenuItem value="24 - 26">24 - 26</MenuItem>
            <MenuItem value="27 - 30">27 - 30</MenuItem>
            <MenuItem value="31 - 33">31 - 33</MenuItem>
            <MenuItem value="34 - 36">34 - 36</MenuItem>
            <MenuItem value="37 - 40">37 - 40</MenuItem>
            <MenuItem value="41 - 45">41 - 45</MenuItem>
            <MenuItem value="46 - 49">46 - 49</MenuItem>
            <MenuItem value="50+">50+</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Años de experiencia">Años de experiencia</InputLabel>
          <Select
            value={this.state['Años de experiencia']}
            onChange={this.handleChange}
            inputProps={{
              name: 'Años de experiencia',
              id: 'Años de experiencia',
            }}
          >
            <MenuItem value="Menos de un año">Menos de un año</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10+">10+</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Años en el puesto actual">Años en el puesto actual</InputLabel>
          <Select
            value={this.state['Años en el puesto actual']}
            onChange={this.handleChange}
            inputProps={{
              name: 'Años en el puesto actual',
              id: 'Años en el puesto actual',
            }}
          >
            <MenuItem value="Menos de un año">Menos de un año</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10+">10+</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="¿Cuánta?"
          name="¿Cuánta?"
          label="¿Cuánta gente a cargo? (si no tenés, poné 0)"
          value={this.state['¿Cuánta?']}
          onChange={this.handleChange}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          min={0}
        />
      </div>
    );
  }
}

export default App;
/*
¿Gente a cargo?
¿Cuánta?
Nivel de estudios alcanzado
Estado
Carrera
Realizaste cursos de especialización
Trabajo de
Tecnologías que utilizás
Tecnologías que utilizás.1
Tecnologías que utilizás.2
Automation o funcional?
Tecnologías que utilizás.3
Tecnologías que utilizás.4
Tipo de contrato
Cantidad de empleados
Beneficios extra
*/
