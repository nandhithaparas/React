package com.example.Agriculture.Controller;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
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
import com.example.Agriculture.Entity.Agriculture;
import com.example.Agriculture.Repository.AgriRepo;
import com.example.Agriculture.Service.AgriService;

@CrossOrigin()
@RestController
@RequestMapping("/agri")
public class AgriController {
	@Autowired
	AgriService as;
	@Autowired
	AgriRepo ar;
	@PostMapping("/post")
	public String save(@RequestBody Agriculture aa)
	{
		as.save(aa);
		return "Saved";
	}
    @GetMapping("/get")
    public Iterable<Agriculture> get()
    {
    	return as.get();
    }
    @GetMapping("/getid/{id}")
    public Object getbyid(@PathVariable int id) {
    	return as.getbyid(id);
    }
    
    @GetMapping("/get/{field}")
    public Iterable<Agriculture> sortbyform(@PathVariable("field") String field)
    {
    	return as.sort(field);
    }
    @GetMapping(value="/getpage/{pagenum}/{pagesize}/{field}")
    Page<Agriculture> InfoPaging(@PathVariable("pagenum") int pagenum,@PathVariable("pagesize") int pagesize,@PathVariable("field") String field)
    {
    	return as.pagingandsorting(pagenum,pagesize,field);
    }
  
   
//    @PutMapping("/update/{id}")
//    public Agriculture updateAgriDetails(@RequestBody  Agriculture ai,@PathVariable int id) {
//        //Optional<Agriculture> agri=ar.findById(id);
//        //final Agriculture agriculture=ar.save(ai);
//    	ai.setId(id);
//        return as.updatevalue(ai);
//    }
//    @GetMapping("/getagri/{id}")
//    public ResponseEntity<Optional<Agriculture>> getagriId(@PathVariable  int id){
//        Optional<Agriculture> agri = ar.findById(id);
//        return ResponseEntity.ok(agri);
//    }
    @PutMapping("/update/{id}")
	public ResponseEntity<Agriculture> update(@PathVariable int id,@RequestBody Agriculture frame){
		Agriculture update=ar.findById(id).orElseThrow(()-> new ResourceNotFoundException("Details doesnot exist with this id"));
		update.setCropname(frame.getCropname());
		update.setBotanicalname(frame.getBotanicalname());
		update.setFertilizer(frame.getFertilizer());
		update.setSoil(frame.getSoil());
		update.setVariety(frame.getVariety());
		update.setSeason(frame.getSeason());
		
		ar.save(update);
		return ResponseEntity.ok(update);
	}
    @GetMapping("/getagri/{id}")
    public ResponseEntity<Optional<Agriculture>> getFrameById(@PathVariable  int id){
        Optional<Agriculture> agri = ar.findById(id);
        return ResponseEntity.ok(agri);
        }
   
    @DeleteMapping("/deletes/{id}")  
	private String deleteid(@PathVariable("id") int id)   
	{  
	    as.deleteid(id); 
	    return "Id Deleted";
	}  
    
}
