package app.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.Entity.Carro;
import app.Exception.RecursoNaoEncontradoException;
import app.Repository.CarroRepository;

@Service
public class CarroService {
	
	@Autowired
	private CarroRepository carroRepository;
	
	//criar crud
	
	public String salvar(Carro carro)
	{
		carro.setId(null); // Importante: forçar ID nulo para novo registro
	    this.carroRepository.save(carro);
	    return "Salvo com ID: " + carro.getId();
	}
	
	public Carro update(Carro carroAtualizado, Long id)
	{
		Carro carro = carroRepository.findById(id).orElseThrow(()->
		new RecursoNaoEncontradoException("Carro com id" +id+ "nao encontrado")
		);
		
		
		carro.setNome(carroAtualizado.getNome());
		carroRepository.save(carro);
		
		
		return (carro);
	}
	
	public List<Carro> findAll ()
	{
		 return carroRepository.findAll();
		
	}
	
	public Carro findById(Long id)
	{
		Carro carro = carroRepository.findById(id).orElseThrow(()->
		new RecursoNaoEncontradoException("Carro com ID" + id + "nao encontrado")
		);
		
		return (carro);
	}
	
	

	
	public String delete(Long id)
	{
		Carro carro = carroRepository.findById(id).orElseThrow(()->
		new RecursoNaoEncontradoException("Carro com ID " + id + "nao encontrado")
		);
		
		carroRepository.delete(carro);
		return ("Carro deletado");	
	}
}
