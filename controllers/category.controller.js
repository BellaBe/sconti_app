const mongoose = require('mongoose');
const { Category }  = require('../models/index');

exports.category_list = (req, res)=>{
  Category.find()
  .select('name _id')
  .exec()
  .then(docs =>{
    const response = {
      count: docs.length,
      categories: docs.map(doc=>{
        return {
          name: doc.name,
          _id: doc._id,
          request: {
            type: 'GET',
            url: 'http://localhost:3300/categories/' + doc._id
          }
        }
      })
    }
    res.status(200).render('categories', {response});
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({error: err});
  });
}

exports.category_detail = (req, res)=>{
  const id = req.params.id;
  Category.findById(id)
  .select('name _id')
    .exec()
    .then(doc =>{
      if(doc){
        console.log(doc);
        res.status(200).json({
          product: doc,
          request: {
            type: 'GET',
            description: 'GET_ALL_CATEGORIES',
            url: 'http://localhost:3300/categories'
          }
        })
      }else{
        res.status(404).json({message: 'Not such a category found'})
      }
      
    })
    .catch(err => {
       console.log('Category not found', err);
       res.status(500).json({error: err})
      
      });
    
}

exports.category_create_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: category create GET');
}
exports.category_create_post = (req, res)=>{
  const category = new Category({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  category.save()
    .then(result => {
       console.log(result);
       res.status(201).json({
        message: 'Created category successfully',
        createdCategory: {
          name: result.name,
          _id: result._id,
          request: {
            type: 'POST',
            url: 'http://localhost:3300/categories/' + result._id
          }
        }
      });
      //res.send('NOT IMPLEMENTED: category create POST')
      })
    .catch(err => {
     console.log(err);
     res.status(500).json({
       error: err
     });
    });
}
exports.category_delete_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: category delete GET')
}
exports.category_delete_post = (req, res)=>{
  const id = req.params.id;
  Category.remove({_id: id})
  .exec()
  .then(result=>{
    console.log(result);
    res.status(200).json({
      message: 'Product deleted',
      request: {
        type: 'POST',
        url: 'http://localhost:3300/categories',
        body: {name: 'String', price: 'Number'}
      }
    });
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
}
exports.category_update_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: category update GET');
}
exports.category_update_post = (req, res)=>{
  const id = req.params.id;
  const updateOps = {};
  for(const ops of req.body){
    updateOps[ops.propName] = ops.value;
  }
  Category.update({_id: id}, {$set: updateOps})
  .exec()
  .then(result =>{
    console.log(result);
    res.status(200).json({
      message: 'Category updated',
      request: {
        type: 'UPDATE',
        url: 'http://localhost:3300/categories' + id
      }
    })
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({error: err});
  })
}