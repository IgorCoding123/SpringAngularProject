package app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.Entity.Carro;
import app.Service.CarroService;

@RestController
@RequestMapping("/api/carro")
@CrossOrigin("*")
public class CarroController {

	@Autowired
	private CarroService carroService;

	//criar crud

	@PostMapping
	public ResponseEntity<String> salvar(@RequestBody Carro carro)
	{
		return ResponseEntity.ok(carroService.salvar(carro));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Carro> atualizar(@RequestBody Carro carro, @PathVariable Long id)
	{
		return ResponseEntity.ok(carroService.update(carro, id));
	}

	@GetMapping
	public ResponseEntity<List<Carro>> findAll ()
	{
		return ResponseEntity.ok(carroService.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Carro> findById(@PathVariable Long id)
	{
		return ResponseEntity.ok(carroService.findById(id));

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> delete(@PathVariable Long id)
	{
		return ResponseEntity.ok(carroService.delete(id));

	}


}
